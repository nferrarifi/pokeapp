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

export async function likePost(postData) {
  const post = await prisma.teams.update({
    data: {
      ...postData,
    },
  });
  return post;
}

export async function dislikePost(postData) {
  const post = await prisma.teams.update({
    data: {
      ...postData,
    },
  });
  return post;
}
