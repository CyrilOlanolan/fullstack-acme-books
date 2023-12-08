import { type BookPreviewType } from "@/dto/books.dto";
import React, { type FC } from "react";
import Stars from "@/components/ui/Stars";
import Link from "next/link";

const Book: FC<BookPreviewType> = (props) => {
  return (
    <Link
      href={`/books/${props.id}`}
      className="bg-grey text-dark-green p-5 rounded-md overflow-hidden flex flex-col shadow-sm"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="grid grid-flow-col gap-1 w-fit mr-2">
          <Stars rating={props.rating} color="#383E31" size="1rem" />
        </div>
        <p className="font-sans font-light text-sm">{props.rating} / 5</p>
      </div>

      <div className="flex flex-col grow mt-3">
        <p className="font-serif italic text-xl font-bold leading-[100%] grow">
          {props.title}
        </p>
        <p className="font-sans leading-[100%] mt-2 font-bold">
          {props.author}
        </p>
      </div>
    </Link>
  );
};

export default Book;
