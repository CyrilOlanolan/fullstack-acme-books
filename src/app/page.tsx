import Books from "@/components/Books/Books";
import AddBookControl from "@/components/Controls/AddBookControl";
import React from "react";

export default async function Home() {
  return (
    <main>
      <p>DASHBOARD</p>
      <AddBookControl />
      <Books />
    </main>
  );
}
