import Books from "@/components/Books/Books";
import AddBookControl from "@/components/Controls/AddBookControl";
import React from "react";

export default async function Home() {
  return (
    <main>
      <div className="supports-[min-height:28dvh]:min-h-[28dvh] min-h-[28vh] flex flex-col items-center justify-center">
        <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif italic font-bold px-6 sm:px-12 text-center">
          Acme Books
        </h1>
        <h2 className="mt-6 text-xl font-sans uppercase tracking-widest">
          Welcome to the country&apos;s first online bookstore!
        </h2>
      </div>

      <AddBookControl />
      <Books />
    </main>
  );
}
