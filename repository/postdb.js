import { prisma } from "../prisma/client";

export async function getAllPosts() {
  const allPosts = await prisma.teams.findMany({});
  return allPosts;
}

export async function createPost(postData) {
  const post = await prisma.teams.create({
    data: {
      ...postData,
    },
  });
  return post;
}
