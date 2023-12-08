import { type BookType } from "@/dto/books.dto";
import prisma from "@/lib/prisma";

export async function GET() {
  const books = await prisma.books.findMany({
    select: {
      id: true,
      title: true,
      author: true,
      rating: true,
      isAvailable: true,
    },
  });

  return new Response(JSON.stringify(books));
}

export async function POST(request: Request) {
  const { title, author, summary }: BookType = await request.json();

  const book = await prisma.books.create({
    data: {
      author,
      title,
      summary,
    },
  });

  return new Response(JSON.stringify(book));
}
