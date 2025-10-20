export type Post = {
  slug: string;
  title: string;
  date: string;
  published: string;
  coverImage: string;
  context: string;
  contextShort: string;
  category: string;
  button?: {
    text: string;
    link: string;
  }
  ogImage: {
    url: string;
  };
  content: string;
  tags?: string[];
  preview?: boolean;
};