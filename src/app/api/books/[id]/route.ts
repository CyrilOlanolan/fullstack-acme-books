import { BookDto } from "@/dto/books.dto";
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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { title, author, summary, rating, isAvailable }: BookDto =
    await request.json();

  const book = await prisma.books.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      author,
      summary,
      title,
      rating,
      isAvailable,
    },
  });

  return new Response(JSON.stringify(book));
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.books.delete({
    where: {
      id: parseInt(params.id),
    },
  });

  return new Response(JSON.stringify({ success: true }));
}
