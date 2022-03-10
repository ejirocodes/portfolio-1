export interface Article {
  id: number;
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
