export const siteUrl = "https://pang-app.com";

export type Product = {
  slug: string;
  name: string;
  shortLabel: string;
  homepageDescription: string;
  landingSummary: string;
  status: string;
  cta: string;
  repoCta?: string;
  externalUrl: string;
  repoUrl?: string;
  heroTitle: string;
  heroDescription: string;
  audience: string;
  whyItFits: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "daily-planner",
    name: "Pang Daily Planner",
    shortLabel: "Daily planning application",
    homepageDescription:
      "A focused daily planning workspace for organizing priorities, staying consistent, and turning intention into a clearer day-to-day execution rhythm.",
    landingSummary:
      "Daily planning software for teams and individuals who want a clearer rhythm for priorities, focus, and follow-through.",
    status: "Live application",
    cta: "Open Daily Planner",
    externalUrl: "https://daily-planner.pang-app.com",
    heroTitle: "A daily planning workspace built for consistency, momentum, and clearer execution.",
    heroDescription:
      "Pang Daily Planner gives the Pang App ecosystem a dedicated place for organizing the day, clarifying priorities, and keeping work moving without unnecessary complexity.",
    audience:
      "Teams and individuals who need a more deliberate daily planning habit without adopting an oversized project management system.",
    whyItFits:
      "It represents the planning side of Pang App: practical structure, better visibility, and a simpler way to stay aligned on what matters now.",
    features: [
      "Focused daily planning workflow",
      "Clear priority organization",
      "Built for consistency and follow-through",
      "Fits into the broader Pang App operating style"
    ]
  },
  {
    slug: "intake",
    name: "Pang Intake",
    shortLabel: "Intake management application",
    homepageDescription:
      "A structured intake experience for capturing requests, organizing submissions, and giving teams a dependable front door for incoming work.",
    landingSummary:
      "Intake management software for teams that need a more reliable way to receive, organize, and triage incoming work.",
    status: "Live application",
    cta: "Open Pang Intake",
    externalUrl: "https://intake.pang-app.com",
    heroTitle: "A clearer front door for requests, submissions, and incoming work.",
    heroDescription:
      "Pang Intake focuses on one of the most common operational pain points: work arrives from many directions, but teams still need one place to receive it clearly and act on it confidently.",
    audience:
      "Teams that manage requests, submissions, or inbound operational work and want better visibility from the first touchpoint.",
    whyItFits:
      "It gives Pang App a dependable intake layer, complementing planning and follow-through with a better starting point for incoming work.",
    features: [
      "Structured request capture",
      "Organized submission workflows",
      "Improved visibility for incoming work",
      "Designed to reduce intake friction"
    ]
  },
  {
    slug: "pang-db",
    name: "Pang DB",
    shortLabel: "PostgreSQL explorer",
    homepageDescription:
      "A database workspace for exploring schemas, browsing rows, and running read-only SQL with a cleaner interface for day-to-day PostgreSQL inspection.",
    landingSummary:
      "A PostgreSQL explorer for local and sandbox-backed inspection, with schema browsing, row exploration, and a read-only SQL runner.",
    status: "Active project",
    cta: "View Pang DB Repo",
    repoCta: "GitHub",
    externalUrl: "https://github.com/tanglao-interactive/pang-db",
    repoUrl: "https://github.com/tanglao-interactive/pang-db",
    heroTitle: "A practical PostgreSQL explorer for understanding data without leaving the Pang workflow style.",
    heroDescription:
      "Pang DB extends the Pang App ecosystem into data visibility, giving developers and technical operators a cleaner way to inspect schemas, browse rows, and run read-only SQL against PostgreSQL.",
    audience:
      "Developers and technical teams who need lightweight database visibility while working locally or through an Amplify sandbox workflow.",
    whyItFits:
      "It gives Pang App a data-side tool that still matches the same product philosophy: clearer workflows, less friction, and more confidence in day-to-day operations.",
    features: [
      "Schema and table explorer",
      "Paginated row browser",
      "Read-only SQL runner",
      "Supports local and sandbox-backed PostgreSQL access"
    ]
  },
  {
    slug: "pang-learning",
    name: "Pang Learning",
    shortLabel: "AI learning platform",
    homepageDescription:
      "An AI-assisted learning platform where learners build committed notes, generate quizzes from durable understanding, and practice with questionnaires.",
    landingSummary:
      "An open-source AI learning platform for committed understanding, learner-reviewed notes, quiz generation, sharing, and group study workflows.",
    status: "Active project",
    cta: "Open Pang Learning",
    externalUrl: "https://learning.pang-app.com",
    heroTitle: "An AI learning platform for committed understanding, not just another chat box.",
    heroDescription:
      "Pang Learning helps learners move from messy exploration to durable knowledge. AI can guide the conversation and propose note updates, but learners review what becomes canonical before quizzes and questionnaires turn that understanding into practice.",
    audience:
      "Students, study communities, and self-directed learners who want AI help without losing control over what counts as their trusted learning record.",
    whyItFits:
      "It expands Pang App from operational workflow software into learning infrastructure while keeping the same emphasis on clarity, review, and confident follow-through.",
    features: [
      "AI-guided learning conversations and staged note changes",
      "Learner-reviewed committed notes as the source of truth",
      "Quiz and questionnaire generation for practice",
      "Profile, sharing, and group study workflows"
    ]
  },
  {
    slug: "pang-cms",
    name: "Pang CMS",
    shortLabel: "Website and CMS product",
    homepageDescription:
      "A planning-stage website and content-management direction for choirs, churches, community groups, artists, and local organizations.",
    landingSummary:
      "A practical website and lightweight CMS direction for local organizations that need events, media, contact information, and updates online.",
    status: "Planning",
    cta: "Ask About Pang CMS",
    externalUrl: "mailto:hello@tanglao.org?subject=Pang%20CMS",
    heroTitle: "A practical website and content-management direction for real local organizations.",
    heroDescription:
      "Pang CMS starts from a simple need: choirs, churches, community groups, artists, and local organizations need clear websites they can keep current. It may begin as a service offer before becoming a reusable software product.",
    audience:
      "Local organizations that need an approachable website for events, media, contact details, updates, and ongoing communication.",
    whyItFits:
      "It gives Pang App a customer-facing website and content workflow path, shaped by real service delivery before the platform overbuilds a generic CMS.",
    features: [
      "Simple websites for community organizations",
      "Homepage, about, events, media, contact, and updates patterns",
      "Lightweight content update workflow when needed",
      "Reusable templates, delivery practices, and deployment patterns"
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
