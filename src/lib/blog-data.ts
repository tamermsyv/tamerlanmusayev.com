export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-started-peptideleads-at-18",
    title: "Why I Started PeptideLeads at 18",
    metaTitle: "Why I Started PeptideLeads at 18 — Tamerlan Musayev",
    description:
      "Tamerlan Musayev shares why he founded PeptideLeads at 18 — the gap he saw in peptide therapy clinic marketing and the opportunity he couldn't ignore.",
    date: "2026-02-15",
    readTime: "5 min read",
    tags: ["Entrepreneurship", "PeptideLeads", "Healthcare Marketing"],
  },
  {
    slug: "what-i-learned-making-six-figures-in-web3",
    title: "What I Learned Making Six Figures in Web3 Before Turning 18",
    metaTitle:
      "What I Learned Making Six Figures in Web3 — Tamerlan Musayev",
    description:
      "Tamerlan Musayev shares lessons from making six figures in NFTs and Web3 before age 18 — community building, risk-taking, and knowing when to move on.",
    date: "2026-02-01",
    readTime: "6 min read",
    tags: ["Web3", "NFTs", "Lessons"],
  },
  {
    slug: "the-cold-email-infrastructure-nobody-talks-about",
    title: "The Cold Email Infrastructure Nobody Talks About",
    metaTitle:
      "The Cold Email Infrastructure Nobody Talks About — Tamerlan Musayev",
    description:
      "Tamerlan Musayev breaks down the unsexy side of cold email outreach — domains, DNS records, warmup, list hygiene, and what it really takes to land in the inbox.",
    date: "2026-01-20",
    readTime: "7 min read",
    tags: ["Cold Email", "Sales", "Infrastructure"],
  },
  {
    slug: "why-peptide-therapy-clinics-are-sitting-on-a-gold-mine",
    title: "Why Peptide Therapy Clinics Are Sitting on a Gold Mine",
    metaTitle:
      "Why Peptide Therapy Clinics Are Sitting on a Gold Mine — Tamerlan Musayev",
    description:
      "Tamerlan Musayev explains why the peptide therapy market is exploding and why most clinics have terrible marketing — the opportunity is massive.",
    date: "2026-01-10",
    readTime: "5 min read",
    tags: ["Peptide Therapy", "Healthcare", "Marketing"],
  },
  {
    slug: "building-a-business-at-18-what-nobody-tells-you",
    title: "Building a Business at 18: What Nobody Tells You",
    metaTitle:
      "Building a Business at 18: What Nobody Tells You — Tamerlan Musayev",
    description:
      "Tamerlan Musayev on the real side of building a business at 18 — the isolation, the boring work, learning from mentors, and staying consistent when nobody gets it.",
    date: "2025-12-28",
    readTime: "6 min read",
    tags: ["Entrepreneurship", "Mindset", "Young Founders"],
  },
];
