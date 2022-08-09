// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma } from "../../prisma/client";

export default async function handler(req, res) {
  const pokemon = await prisma.kanto.findMany();
  res.status(200).json(pokemon);
}
