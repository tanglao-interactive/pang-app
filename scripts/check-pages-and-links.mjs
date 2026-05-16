import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import ts from "typescript";

const rootDir = path.resolve(import.meta.dirname, "..");
const productsPath = path.join(rootDir, "lib/products.ts");
const execFileAsync = promisify(execFile);

async function importProducts() {
  const source = await readFile(productsPath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022
    }
  });
  const dataUrl = `data:text/javascript;base64,${Buffer.from(output.outputText).toString("base64")}`;

  return import(dataUrl);
}

function assertHttpUrl(url, fieldName) {
  assert.doesNotThrow(() => new URL(url), `${fieldName} must be a valid URL: ${url}`);
  assert.match(url, /^https:\/\//, `${fieldName} must use https: ${url}`);
}

function assertMailtoUrl(url, fieldName) {
  assert.match(
    url,
    /^mailto:[^@\s]+@[^@\s]+\.[^@\s?]+(\?.*)?$/,
    `${fieldName} must be a valid mailto URL: ${url}`
  );
}

async function fetchStatus(url) {
  const headStatus = await curlStatus(url, true);

  if (headStatus !== 405) {
    return headStatus;
  }

  return curlStatus(url, false);
}

async function curlStatus(url, useHead) {
  const args = [
    "-L",
    "-sS",
    "--max-time",
    "10",
    "-o",
    "/dev/null",
    "-w",
    "%{http_code}"
  ];

  if (useHead) {
    args.push("-I");
  }

  args.push(url);

  const { stdout } = await execFileAsync("curl", args);

  return Number(stdout.trim());
}

async function assertReachable(url) {
  let status;

  try {
    status = await fetchStatus(url);
  } catch (error) {
    throw new Error(`Expected ${url} to be publicly reachable: ${error.message}`);
  }

  assert(
    status >= 200 && status < 400,
    `Expected ${url} to be publicly reachable, received HTTP ${status}`
  );
}

const { products, siteUrl } = await importProducts();

assertHttpUrl(siteUrl, "siteUrl");
assert(Array.isArray(products), "products must be an array");
assert(products.length > 0, "products must not be empty");

const seenSlugs = new Set();
const publicHttpLinks = new Set();
const localPages = new Set(["/", "/robots.txt", "/sitemap.xml"]);

for (const product of products) {
  const context = `${product.name ?? "Unnamed product"}`;

  assert.match(
    product.slug,
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    `${context} slug must be kebab-case`
  );
  assert(!seenSlugs.has(product.slug), `${context} slug is duplicated`);
  seenSlugs.add(product.slug);

  for (const field of [
    "name",
    "shortLabel",
    "homepageDescription",
    "landingSummary",
    "status",
    "cta",
    "externalUrl",
    "heroTitle",
    "heroDescription",
    "audience",
    "whyItFits"
  ]) {
    assert.equal(typeof product[field], "string", `${context}.${field} must be a string`);
    assert(product[field].trim().length > 0, `${context}.${field} must not be empty`);
  }

  assert(Array.isArray(product.features), `${context}.features must be an array`);
  assert(product.features.length > 0, `${context}.features must not be empty`);

  localPages.add(`/products/${product.slug}`);

  if (product.externalUrl.startsWith("mailto:")) {
    assertMailtoUrl(product.externalUrl, `${context}.externalUrl`);
    assert.match(
      product.cta,
      /ask|contact/i,
      `${context}.cta should match mailto destination intent`
    );
  } else {
    assertHttpUrl(product.externalUrl, `${context}.externalUrl`);
    publicHttpLinks.add(product.externalUrl);
  }

  if (product.repoUrl) {
    assertHttpUrl(product.repoUrl, `${context}.repoUrl`);
    assert.match(
      product.repoUrl,
      /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/,
      `${context}.repoUrl must point to a GitHub repository root`
    );
    publicHttpLinks.add(product.repoUrl);
  }

  if (product.repoCta) {
    assert(product.repoUrl, `${context}.repoCta requires repoUrl`);
  }

  if (/repo/i.test(product.cta)) {
    assert(
      product.repoUrl && product.externalUrl === product.repoUrl,
      `${context}.cta mentions repo, so externalUrl must match repoUrl`
    );
  }
}

for (const localPage of localPages) {
  assert.match(localPage, /^\/($|[a-z0-9#?/_-])/, `Invalid local page path: ${localPage}`);
}

for (const url of publicHttpLinks) {
  await assertReachable(url);
}

console.log(
  `Validated ${products.length} products, ${localPages.size} local pages, and ${publicHttpLinks.size} public links.`
);
