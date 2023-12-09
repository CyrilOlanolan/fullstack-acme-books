import { BookPreviewType } from "@/dto/books.dto";
import React, { type FC } from "react";
import Book from "./Book";

const Books: FC = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, {
    next: {
      tags: ["books"],
    },
  });

  if (!response.ok) {
    return <main>Error</main>;
  }

  const books: BookPreviewType[] = await response.json();
  return (
    <div className="mx-auto px-6 md:px-8 lg:px-12 w-fit grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book, index) => (
        <Book key={`book-${index}`} {...book} />
      ))}
    </div>
  );
};

export default Books;
