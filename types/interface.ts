export interface Article {
  tech: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;
  publisher: string;
  url: string;
  tags?: string[];
}

interface Url {
  type: string;
  link: string;
}
export interface Project {
  title: string;
  logo: string;
  details: string;
  url: Url[];
  type: string;
}
