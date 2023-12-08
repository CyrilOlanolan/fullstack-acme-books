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
      summary:
        '"The Ballad of Songbirds and Snakes" by Suzanne Collins, a prequel to the renowned "Hunger Games" series, delves into the backstory of President Coriolanus Snow, decades before his tyrannical rule over Panem. Set during the 10th annual Hunger Games, the novel follows a young Snow, who is struggling with his family\'s fall from grace. As a mentor to a tribute from the impoverished District 12, Snow confronts the harsh realities of the Capitol\'s cruel games and grapples with his ambitions, morality, and a growing bond with his tribute. This transformative journey sheds light on the events and choices that shape Snow into the despotic ruler seen in the original trilogy, exploring themes of power, survival, and the complexities of human nature.',
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
      summary:
        '"Iron Flame" by Rebecca Yarros, the second installment in The Empyrean series, continues the saga from where "Fourth Wing" left off. The story centers around Violet Sorrengail, a 20-year-old student at Basgiath War College, where she is training to become a dragon rider, despite facing the challenges of a physical disability. The novel starts with Violet struggling through the intense and brutal training at the war college, where survival is a daily battle in a world where dragon riders make their own rules. The plot thickens as Violet deals with betrayal by her best friend and the shocking revelation that her supposedly dead brother is alive and part of a resistance. This leads her, along with Xaden and their war games group, into a perilous situation, facing off against deadly creatures and navigating a landscape of trust, resilience, and survival.',
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
      summary:
        '"The Little Liar" by Mitch Albom is a poignant novel set during the Holocaust. The story unfolds in a coastal Greek city and later moves to America, chronicling the intertwined lives of three survivors whose lives are irrevocably changed by deception and the pursuit of redemption. The narrative revolves around Nico Krispis, an eleven-year-old who, prior to the war, had never told a lie. Alongside Nico, the novel explores the experiences of his brother Sebastian, their schoolmate Fanni, and a Nazi officer named Udo Graf. These four interconnected characters, including three Jews from Salonika, Greece, and a devoted Third Reich officer, navigate the horrors of the Holocaust and its aftermath. Nico, Sebastian, and Fanni miraculously survive the death camps but spend years dealing with the consequences of Nico\'s transformation into a pathological liar and their interactions with the Nazi officer who drastically altered the course of their lives.',
    },
  });
};

seed();
