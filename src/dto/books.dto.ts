export type BookDto = {
  author: string;
  summary: string;
  title: string;
  rating: number;
  isAvailable: boolean;
};

export type BookType = {
  id: number;
  title: string;
  author: string;
  rating: number;
  summary: string;
  isAvailable: boolean;
};

export type BookPreviewType = {
  id: number;
  title: string;
  author: string;
  rating: number;
  isAvailable: boolean;
};
