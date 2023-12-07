import prisma from "../src/lib/prisma";

export const seed = async () => {
  await seedBooks();
};

const seedBooks = async () => {
  const book = await prisma.books.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      id: 1,
      title: "The Ballad of Songbirds and Snakes",
      author: "Suzanne Collins",
      summary: "Summary 1",
    },
  });

  await prisma.books.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      id: 2,
      title: "Iron Flame",
      author: "Rebecca Yarros",
      summary: "Summary 2",
    },
  });

  await prisma.books.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      id: 3,
      title: "The Little Liar",
      author: "Mitch Albom",
      summary: "Summary 3",
    },
  });
};

seed();
