type Product = {
  name: string;
  label: string;
  description: string;
  status: string;
  cta: string;
  href: string;
};

type Capability = {
  title: string;
  description: string;
  metric: string;
};

const products: Product[] = [
  {
    name: "Pang Daily Planner",
    label: "Daily planning application",
    description:
      "A focused daily planning workspace for organizing priorities, staying consistent, and turning intention into a clearer day-to-day execution rhythm.",
    status: "Live application",
    cta: "Open Daily Planner",
    href: "https://daily-planner.pang-app.com"
  },
  {
    name: "Pang Intake",
    label: "Intake management application",
    description:
      "A structured intake experience for capturing requests, organizing submissions, and giving teams a dependable front door for incoming work.",
    status: "Live application",
    cta: "Open Pang Intake",
    href: "https://intake.pang-app.com"
  }
];

const capabilities: Capability[] = [
  {
    title: "Designed around real operating work",
    description:
      "Pang App is shaped around recurring work that teams actually need to manage: planning the day, receiving requests, and keeping follow-through visible.",
    metric: "Built around practical workflows"
  },
  {
    title: "Focused products with a common operating style",
    description:
      "Daily Planner and Pang Intake solve different problems, but they share the same philosophy: reduce friction, improve clarity, and keep work moving.",
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
  "Daily planning and intake workflows",
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
            tools like Pang Daily Planner and Pang Intake. The goal is simple:
            help teams stay organized, receive work clearly, and move with more
            consistency every day.
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
            The current lineup centers on daily planning and intake management,
            with room to grow into adjacent tools that keep teams aligned without
            adding unnecessary complexity.
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
                <a href={product.href} target="_blank" rel="noreferrer">
                  {product.cta}
                </a>
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
            planning and intake because those are two of the most common places
            where work becomes inconsistent, delayed, or hard to track.
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
            <p>By expanding from planning and intake into adjacent workflows while keeping the overall experience unified.</p>
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
