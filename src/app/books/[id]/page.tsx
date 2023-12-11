import DeleteBookControl from "@/components/Controls/DeleteBookControl";
import UpdateBookControl from "@/components/Controls/UpdateBookControl";
import Back from "@/components/ui/Back";
import Stars from "@/components/ui/Stars";
import { type BookType } from "@/dto/books.dto";
import React from "react";

const BookPage = async (props: {
  params: {
    id: string;
  };
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/books/${props.params.id}`,
    {
      next: {
        tags: ["book"],
      },
    }
  );

  if (!response.ok) {
    return <div>Error fetching!</div>;
  }

  const book: BookType = await response.json();

  if (response.status === 404) {
    return <div>Book not found</div>;
  }

  return (
    <main className="bg-dark-green">
      <div className="px-6 sm:px-12 text-grey">
        <div className="py-12 supports-[min-height:100dvh]:min-h-[100dvh] min-h-[100vh] flex flex-col">
          <div className="flex flex-row justify-between">
            <Back />
            <p className="font-sans font-light text-right text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest">
              BOOK #{book.id}
            </p>
          </div>

          <div>
            <h1 className="my-[15vh] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif italic fong-bold hyphens-auto break-words">
              {book.title}
            </h1>
            <h2 className="font-sans font-light text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest">
              {book.author}
            </h2>
          </div>

          <p className="text-grey/60 font-sans text-center mt-auto tracking-widest">
            VIEW DETAILS BELOW
          </p>
        </div>

        <div className="py-6">
          <p className="tracking-widest font-sans font-light text-left text-md sm:text-lg md:text-xl lg:text-2xl mb-4">
            SUMMARY
          </p>
          <p className="font-sans max-w-4xl">{book.summary}</p>
        </div>

        <div className="py-6">
          <p className="tracking-widest font-sans font-light text-left text-md sm:text-lg md:text-xl lg:text-2xl mb-4">
            RATING
          </p>
          <div className="grid grid-flow-col gap-2 w-fit">
            <Stars color="#ECEFE8" size="2.5rem" rating={book.rating} />
          </div>
          <p className="font-sans mt-3">{book.rating} / 5 | GoodReads</p>
        </div>

        <div className="pt-6 pb-12">
          <p className="tracking-widest font-sans font-light text-left text-md sm:text-lg md:text-xl lg:text-2xl mb-4">
            AVAILABILITY
          </p>
          <p className="font-sans mt-3">
            {book.isAvailable ? "AVAILABLE" : "UNAVAILABLE"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-2 w-full px-6 mx-auto pb-12 md:max-w-[18.75rem] md:grid-cols-2 gap-x-3">
        <UpdateBookControl id={book.id} />
        <DeleteBookControl id={book.id} />
      </div>
    </main>
  );
};

export default BookPage;
