type Product = {
  name: string;
  label: string;
  description: string;
  status: string;
  cta: string;
};

type Capability = {
  title: string;
  description: string;
  metric: string;
};

const products: Product[] = [
  {
    name: "Pang Flow",
    label: "Operations platform",
    description:
      "A structured operating layer for teams that need approvals, status clarity, and repeatable execution without enterprise bloat.",
    status: "Launching platform",
    cta: "Product preview"
  },
  {
    name: "Pang Signal",
    label: "Monitoring application",
    description:
      "A subscription application that turns operational activity into clear decision signals, alerts, and executive-ready reporting.",
    status: "In roadmap",
    cta: "View concept"
  },
  {
    name: "Pang Desk",
    label: "Service workspace",
    description:
      "A managed workspace for customer-facing teams that need a tighter handoff between workflows, subscriptions, and support operations.",
    status: "In design",
    cta: "Explore direction"
  }
];

const capabilities: Capability[] = [
  {
    title: "Designed around real operating work",
    description:
      "Pang App is shaped for teams that need clearer workflows, stronger accountability, and less friction in day-to-day execution.",
    metric: "Designed for launch and sustained use"
  },
  {
    title: "Subscription-ready from the start",
    description:
      "The platform is intended to support recurring product delivery, ongoing improvements, and a cleaner relationship between product value and customer usage.",
    metric: "Built for recurring revenue products"
  },
  {
    title: "Security and reliability as defaults",
    description:
      "The platform posture emphasizes dependable delivery, careful access patterns, and maintainable systems that can scale with customer demand.",
    metric: "Enterprise-minded foundations"
  },
  {
    title: "Built to evolve over time",
    description:
      "Pang App is meant to improve continuously, with product decisions shaped by actual use instead of one-time project handoffs.",
    metric: "Managed beyond launch"
  }
];

const signals = [
  "A focused software platform",
  "Subscription-based model",
  "Designed for modern teams",
  "Built and operated by Tanglao, Corp"
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
            Pang App helps teams run with more clarity, consistency, and control.
          </h1>
          <p className="hero-body">
            Pang App is a subscription-based software platform built for teams that
            need structure without bureaucracy. It brings together operational
            visibility, workflow discipline, and product-ready reliability in one
            focused experience.
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
            <h2>A focused platform, not a patchwork of tools</h2>
            <p>
              Pang App is built to give teams a cleaner operating layer for the
              work that usually becomes scattered across spreadsheets, inboxes, and
              disconnected software.
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
          <p className="eyebrow">Platform components</p>
          <h2>Pang App is structured as a modern platform with room to expand over time.</h2>
          <p>
            These placeholder modules show how Pang App can grow into a fuller
            product ecosystem while still feeling like one coherent system.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className="card-topline">
                <span>{product.label}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="card-footer">
                <span className="status-tag">{product.status}</span>
                <a href="#contact">{product.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block capability-section" id="capabilities">
        <div className="section-heading compact">
          <p className="eyebrow">Why it matters</p>
          <h2>Pang App is designed to be useful in practice, not just impressive in a demo.</h2>
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
          <h2>A software product built to make operational work feel sharper and more manageable.</h2>
          <p>
            Pang App is meant for teams that want stronger process clarity without
            adopting heavyweight enterprise software. It focuses on the kind of
            work that benefits from structure, visibility, and dependable follow-through.
          </p>
          <p>
            The product is created and operated by Tanglao, Corp, which keeps the
            company context present without turning the website into a corporate-first pitch.
          </p>
        </div>
        <div className="about-panel">
          <div>
            <span className="panel-label">Who it serves</span>
            <p>Teams that need more structure, visibility, and consistency in how work moves.</p>
          </div>
          <div>
            <span className="panel-label">How it grows</span>
            <p>By expanding Pang App thoughtfully into adjacent workflows while keeping the experience unified.</p>
          </div>
          <div>
            <span className="panel-label">Who builds it</span>
            <p>Tanglao, Corp is the company behind Pang App and its ongoing product development.</p>
          </div>
        </div>
      </section>

      <section className="section-block cta-section" id="contact">
        <div className="cta-card">
          <p className="eyebrow">Next step</p>
          <h2>See where Pang App is headed next.</h2>
          <p>
            Pang App is positioned to expand into deeper product detail, launch
            updates, and clearer use-case pages as the platform matures.
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
          <p>Pang App is built and operated by Tanglao, Corp.</p>
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
