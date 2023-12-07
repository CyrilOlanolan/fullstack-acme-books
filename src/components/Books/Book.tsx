import { Book } from "@/dto/books.dto";
import React, { type FC } from "react";

const Book: FC<Book> = (props) => {
  return (
    <div>
      <div>
        <p>{props.title}</p>
        <p>{props.author}</p>
      </div>

      <p>{props.summary}</p>
    </div>
  );
};

export default Book;
