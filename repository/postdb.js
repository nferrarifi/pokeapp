import { prisma } from "../prisma/client";

export async function getAllPosts() {
  const allPosts = await prisma.teams.findMany({
    orderBy: {
      likes: "desc",
    },
  });
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

export async function likePost(id, likes) {
  const post = await prisma.teams.update({
    data: {
      likes,
    },
    where: {
      id,
    },
  });
  return post;
}
