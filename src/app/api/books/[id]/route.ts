import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const book = await prisma.books.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!book) {
    return new Response(JSON.stringify({ error: "Book not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(book));
}
