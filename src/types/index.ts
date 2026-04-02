export interface SEOData {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  ogImage?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  featuredImage: string;
  category: string;
  status: 'published' | 'draft';
  seo: SEOData;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  deliverables: string[];
  status: 'published' | 'draft';
  seo: SEOData;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  image: string;
  status: 'published' | 'draft';
  seo: SEOData;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  validity: string;
  cta: string;
  status: 'active' | 'expired';
}
