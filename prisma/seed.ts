import prisma from "../src/lib/prisma";

export const seed = async () => {
  await seedBooks();
};

const seedBooks = async () => {
  await prisma.books.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      id: 1,
      title: "The Ballad of Songbirds and Snakes",
      author: "Suzanne Collins",
      rating: 4,
      isAvailable: true,
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
      rating: 4.5,
      isAvailable: true,
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
      rating: 4.8,
      isAvailable: false,
      summary: "Summary 3",
    },
  });
};

seed();
