import Link from "next/link";
import { products } from "../lib/products";

type Capability = {
  title: string;
  description: string;
  metric: string;
};

const capabilities: Capability[] = [
  {
    title: "Designed around real operating work",
    description:
      "Pang App is shaped around recurring work that teams actually need to manage: planning the day, receiving requests, exploring data, and keeping follow-through visible.",
    metric: "Built around practical workflows"
  },
  {
    title: "Focused products with a common operating style",
    description:
      "Daily Planner, Pang Intake, and Pang DB solve different problems, but they share the same philosophy: reduce friction, improve clarity, and keep work moving.",
    metric: "Consistent product family"
  },
  {
    title: "Technical depth behind the product decisions",
    description:
      "The broader Tanglao approach leans on user experience, backend systems, and maintainable operations so the product feels clean on the surface and solid underneath.",
    metric: "UX, backend, and systems thinking"
  },
  {
    title: "Built to evolve over time",
    description:
      "Pang App is meant to improve continuously, with features shaped by real usage and a long-term product mindset rather than one-off delivery.",
    metric: "Iterated through real use"
  }
];

const signals = [
  "Planning, intake, and data workflows",
  "Built for clarity and follow-through",
  "Designed for modern teams",
  "Created by Tanglao, Corp"
];

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-gradient" />
      <header className="topbar">
        <a className="brand-mark" href="#top" aria-label="Pang App home">
          <span className="brand-pill">PA</span>
          <span className="brand-text">
            <strong>Pang App</strong>
            <span>Software for teams that need clearer operations</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software platform by Tanglao, Corp</p>
          <h1>
            Pang App is a focused software platform for planning work and managing intake with less friction.
          </h1>
          <p className="hero-body">
            Built by Tanglao, Corp, Pang App brings together practical workflow
            tools like Pang Daily Planner, Pang Intake, and Pang DB. The goal is
            simple: help teams stay organized, receive work clearly, inspect data
            more easily, and move with more consistency every day.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Explore Pang App
            </a>
            <a className="button button-secondary" href="#about">
              Why Pang App
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Platform highlights">
          <div className="hero-panel-label">What it is</div>
          <div className="hero-panel-card">
            <span>01</span>
            <h2>Purpose-built products for how work actually arrives and gets done</h2>
            <p>
              Pang App focuses on everyday operational pressure points: planning
              what needs to happen, collecting what comes in, and keeping the next
              step clear for the team.
            </p>
          </div>
          <ul className="signal-list">
            {signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block" id="products">
        <div className="section-heading">
          <p className="eyebrow">Products</p>
          <h2>Pang App brings related workflow products into one clearer ecosystem.</h2>
          <p>
            The current lineup centers on daily planning, intake management, and
            practical database exploration, with room to grow into adjacent tools
            that keep teams aligned without adding unnecessary complexity.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className="card-topline">
                <span>{product.shortLabel}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="product-card-body">
                <h3>{product.name}</h3>
                <p>{product.homepageDescription}</p>
                {product.repoUrl ? (
                  <div className="product-repo-row">
                    <a
                      className="repo-icon-link"
                      href={product.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${product.name} GitHub repository`}
                      title={`${product.name} GitHub repository`}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        focusable="false"
                      >
                        <path
                          fill="currentColor"
                          d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56l-.02-2.17c-3.2.69-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.18a11.15 11.15 0 0 1 5.8 0c2.22-1.5 3.19-1.18 3.19-1.18.63 1.6.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.19l-.02 3.24c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                        />
                      </svg>
                    </a>
                  </div>
                ) : null}
              </div>
              <div className="card-footer">
                <span className="status-tag">{product.status}</span>
                <Link className="product-primary-link" href={`/products/${product.slug}`}>
                  {product.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block capability-section" id="capabilities">
        <div className="section-heading compact">
          <p className="eyebrow">Why it matters</p>
          <h2>Pang App is designed to feel practical, clear, and dependable from the first use.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title}>
              <p className="metric">{capability.metric}</p>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block about-grid" id="about">
        <div className="about-copy">
          <p className="eyebrow">About Pang App</p>
          <h2>A product family built around the workflows that teams repeat every day.</h2>
          <p>
            Pang App is for teams that want stronger process clarity without
            adopting heavyweight enterprise software. Its first products focus on
            planning, intake, and data visibility because those are some of the
            most common places where work becomes inconsistent, delayed, or hard
            to track.
          </p>
          <p>
            It is created and operated by Tanglao, Corp, reflecting Franz
            Tanglao&apos;s focus on user experience, backend development, and systems
            administration as part of a practical product-building approach.
          </p>
        </div>
        <div className="about-panel">
          <div>
            <span className="panel-label">Who it serves</span>
            <p>Teams that need more structure, visibility, and consistency in how work gets planned and received.</p>
          </div>
          <div>
            <span className="panel-label">How it grows</span>
            <p>By expanding from planning, intake, and database tooling into adjacent workflows while keeping the overall experience unified.</p>
          </div>
          <div>
            <span className="panel-label">Who builds it</span>
            <p>Tanglao, Corp is the company behind Pang App, with Franz Tanglao leading the broader product and technical direction.</p>
          </div>
        </div>
      </section>

      <section className="section-block cta-section" id="contact">
        <div className="cta-card">
          <p className="eyebrow">Next step</p>
          <h2>Start with the products that already define the Pang App direction.</h2>
          <p>
            As Pang App grows, the site can expand into deeper product detail,
            clearer use cases, and new workflow tools that fit the same operating
            philosophy.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@tanglao.org">
              Contact the team
            </a>
            <a className="button button-secondary" href="#products">
              Review the platform
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Pang App</strong>
          <p>Pang App is built and operated by Tanglao, Corp, with an emphasis on practical software for planning, intake, and operational clarity.</p>
        </div>
        <div className="footer-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
