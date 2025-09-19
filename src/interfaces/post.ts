export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  context: string;
  contextShort: string;
  category: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags?: string[];
  preview?: boolean;
};