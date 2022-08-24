import { prisma } from "../prisma/client";

export async function getAllPosts() {
  const allPosts = await prisma.teams.findMany({});
  return allPosts;
}
