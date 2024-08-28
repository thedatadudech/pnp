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
};

export interface WorkForProps {
  data: Company[];
  total: number;
}
export type Techs = {
  title: string;
  imgUrl: string;
  imgBlurData?: string;
  category: string; // programming language, library,
  fileName: string;
  date: number;
  years: number; //years of experience
};

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
  imgsBlurData: ImgBlurData;
};

export type Card = "blogs" | "projects" | "apps" | "company" | "techs";
export type CardData = Project[] | Blog[] | App[] | Company[] | Techs[];
export type CardItem = Project | Blog | App | Company | Techs;
export type ImgBlurItem = { base64: string; height: number; width: number };
export type ImgBlurData = { [url: string]: ImgBlurItem };
