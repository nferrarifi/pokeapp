import { prisma } from "../prisma/client";

export async function getAllPokemon() {
  const allPokemon = await prisma.kanto.findMany();
  return allPokemon;
}

export async function getPokemon(id) {
  const pokemon = await prisma.kanto.findUnique({
    where: { id },
  });
  return pokemon;
}
