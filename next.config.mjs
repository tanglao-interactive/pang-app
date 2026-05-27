import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const allowedDevOrigin = process.env.NEXT_ALLOWED_DEV_ORIGIN?.trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: allowedDevOrigin ? [allowedDevOrigin] : undefined,
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
