import { prisma } from "../prisma/client";

export async function getAllPokemon() {
  const allPokemon = await prisma.kanto.findMany({
    orderBy: {
      pokeid: "asc",
    },
  });
  return allPokemon;
}

export async function getOnePokemon(id) {
  const pokemon = await prisma.kanto.findUnique({
    where: { id },
  });
  return pokemon;
}
