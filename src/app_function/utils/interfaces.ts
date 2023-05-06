export type Company = {
  title: string;
  imgUrl: string;
  imgBlurData?: string;
  homePage: string;
  date: number;
  start: number;
  end: number;
  fileName: string;
  readTime: string;
}

export interface WorkForProps {
  data: Company[];
  total: number;
}

export type Blog = {
  title: string;
  imgUrl: string;
  imgBlurData?: string;
  desc: string;
  date: number;
  readTime: number;
  fileName: string;
};

export type Project = {
  imgUrl: string;
  imgBlurData?: string;
  app: { name: string; logoUrl: string };
  company: { name: string; logoUrl: string };
  whatText: string;
  result: string;
  date: number;
  readTime: number;
  fileName: string;
};

interface Listing {
  name: string;
  link: string;
}

export type App = {
  imgUrl: string;
  imgBlurData?: string;
  date: number;
  title: string;
  category: string;
  platforms: Listing[];
  fileName: string;
  imgs: string[];
};

export type Card = "blogs" | "projects" | "apps" | "company";
export type CardData = Project[] | Blog[] | App[] | Company[];
export type CardItem = Project | Blog | App | Company;
