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
    title: "Product design with operating depth",
    description:
      "Tanglao, Corp pairs software design with the practical realities of rollout, adoption, and long-term product operation.",
    metric: "Designed for launch and sustained use"
  },
  {
    title: "Subscription-ready platform management",
    description:
      "From billing-adjacent workflows to customer lifecycle support, the business model is built into the product strategy from day one.",
    metric: "Built for recurring revenue products"
  },
  {
    title: "Security and reliability as defaults",
    description:
      "The platform posture emphasizes dependable delivery, careful access patterns, and maintainable systems that can scale with customer demand.",
    metric: "Enterprise-minded foundations"
  },
  {
    title: "Continuous improvement, not one-time delivery",
    description:
      "The company operates what it builds, which keeps roadmaps grounded in real product usage rather than handoff-driven services work.",
    metric: "Managed beyond launch"
  }
];

const signals = [
  "Multi-product company structure",
  "Subscription operating model",
  "Designed for modern teams",
  "Credible, focused product roadmap"
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
        <a className="brand-mark" href="#top" aria-label="Tanglao, Corp home">
          <span className="brand-pill">TC</span>
          <span className="brand-text">
            <strong>Tanglao, Corp</strong>
            <span>Software products built to run</span>
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
          <p className="eyebrow">Parent company for focused software applications</p>
          <h1>
            Tanglao, Corp creates subscription-based software that feels decisive,
            dependable, and ready to operate.
          </h1>
          <p className="hero-body">
            Built for teams that want modern software without the friction of
            oversized enterprise systems, Pang App is the public home for the
            products Tanglao, Corp is launching and managing over time.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Explore products
            </a>
            <a className="button button-secondary" href="#about">
              How we operate
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Company highlights">
          <div className="hero-panel-label">Operating model</div>
          <div className="hero-panel-card">
            <span>01</span>
            <h2>Owned products, not client work</h2>
            <p>
              Tanglao, Corp develops and manages its own software portfolio, with
              each application designed around recurring value and long-term product
              stewardship.
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
          <p className="eyebrow">Product portfolio</p>
          <h2>Applications designed as a coherent suite, not a loose set of launches.</h2>
          <p>
            The initial lineup is represented with placeholder concepts so the site
            can establish Tanglao, Corp as a multi-product company from day one.
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
          <p className="eyebrow">Capabilities</p>
          <h2>Everything is shaped around operating real SaaS products over time.</h2>
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
          <p className="eyebrow">About Tanglao, Corp</p>
          <h2>A smaller company with a sharper focus: build useful software and keep it running well.</h2>
          <p>
            While larger firms often package expertise as a service, Tanglao, Corp
            is organizing around ownership. The company creates software, brings it
            to market as a subscription business, and keeps improving the platform
            as customers use it.
          </p>
          <p>
            That model creates tighter feedback loops, clearer accountability, and a
            product strategy that stays connected to operational reality.
          </p>
        </div>
        <div className="about-panel">
          <div>
            <span className="panel-label">Who it serves</span>
            <p>Teams that want software with enterprise discipline and startup speed.</p>
          </div>
          <div>
            <span className="panel-label">How it grows</span>
            <p>By launching focused applications, supporting subscriptions, and compounding product quality.</p>
          </div>
          <div>
            <span className="panel-label">Why this site exists</span>
            <p>To present Pang App as the front door to the wider Tanglao, Corp product portfolio.</p>
          </div>
        </div>
      </section>

      <section className="section-block cta-section" id="contact">
        <div className="cta-card">
          <p className="eyebrow">Next step</p>
          <h2>See what Tanglao, Corp is building next.</h2>
          <p>
            The site is designed to expand into dedicated product pages, launch
            updates, and company information as the portfolio grows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@tanglao.org">
              Contact Tanglao, Corp
            </a>
            <a className="button button-secondary" href="#products">
              Review the portfolio
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Tanglao, Corp</strong>
          <p>Pang App is the public website for Tanglao, Corp and its software portfolio.</p>
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
