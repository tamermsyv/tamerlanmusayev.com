import { peptideMarketingPosts } from "./blog/peptide-marketing";
import { coldEmailPosts } from "./blog/cold-email";
import { seoPosts } from "./blog/seo";
import { entrepreneurshipPosts } from "./blog/entrepreneurship";
import { personalPosts } from "./blog/personal";
import { comparisonPosts } from "./blog/comparisons";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  excerpt: string;
  content: string;
  relatedSlugs: string[];
  date?: string;
  readTime?: string;
  tags?: string[];
  metaTitle?: string;
}

export const blogPosts: BlogPost[] = [
  ...peptideMarketingPosts,
  ...coldEmailPosts,
  ...seoPosts,
  ...entrepreneurshipPosts,
  ...personalPosts,
  ...comparisonPosts,
];
