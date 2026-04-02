import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products, siteUrl } from "../../../lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Pang App`,
    description: product.landingSummary,
    alternates: {
      canonical: `${siteUrl}/products/${product.slug}`
    },
    openGraph: {
      title: `${product.name} | Pang App`,
      description: product.landingSummary,
      url: `${siteUrl}/products/${product.slug}`,
      siteName: "Pang App",
      type: "website"
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="page-shell">
      <div className="page-gradient" />

      <header className="topbar">
        <Link className="brand-mark" href="/" aria-label="Pang App home">
          <span className="brand-pill">PA</span>
          <span className="brand-text">
            <strong>Pang App</strong>
            <span>Software for teams that need clearer operations</span>
          </span>
        </Link>
        <nav className="topnav" aria-label="Product page navigation">
          <Link href="/">Home</Link>
          <Link href="/#products">Products</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{product.shortLabel}</p>
          <p className="breadcrumb">
            <Link href="/">Pang App</Link>
            <span>/</span>
            <span>{product.name}</span>
          </p>
          <h1>{product.heroTitle}</h1>
          <p className="hero-body">{product.heroDescription}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={product.externalUrl} target="_blank" rel="noreferrer">
              {product.cta}
            </a>
            <Link className="button button-secondary" href="/#products">
              Back to products
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-label={`${product.name} metadata`}>
          <div className="hero-panel-label">Product snapshot</div>
          <div className="hero-panel-card">
            <span>01</span>
            <h2>{product.name}</h2>
            <p>{product.landingSummary}</p>
          </div>
          <ul className="signal-list">
            <li>{product.status}</li>
            <li>{product.audience}</li>
            <li>{product.whyItFits}</li>
          </ul>
        </div>
      </section>

      <section className="section-block product-detail-grid">
        <div className="product-story">
          <div className="section-heading compact">
            <p className="eyebrow">Overview</p>
            <h2>Why {product.name} belongs in Pang App.</h2>
          </div>
          <div className="story-grid">
            <article className="story-card">
              <span className="panel-label">Who it serves</span>
              <p>{product.audience}</p>
            </article>
            <article className="story-card">
              <span className="panel-label">Why it fits</span>
              <p>{product.whyItFits}</p>
            </article>
          </div>
        </div>

        <aside className="product-sidecard">
          <span className="panel-label">Key capabilities</span>
          <ul className="feature-list">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          {product.repoUrl ? (
            <a className="button button-secondary sidecard-button" href={product.repoUrl} target="_blank" rel="noreferrer">
              View source
            </a>
          ) : null}
        </aside>
      </section>

      <section className="section-block cta-section">
        <div className="cta-card">
          <p className="eyebrow">Explore further</p>
          <h2>See how {product.name} fits into the larger Pang App product family.</h2>
          <p>
            Pang App connects planning, intake, and data visibility through focused
            software products that share a practical operating style.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/#products">
              View all products
            </Link>
            <Link className="button button-secondary" href="/#contact">
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
