import { createPost, getAllPosts } from "../../repository/postdb";

export default async function handler(req, res) {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      const posts = await getAllPosts();
      res.status(200).json(posts);
      break;
    case "POST":
      console.log("Post successful");
      console.log(req.body);
      await createPost(req.body);
      res.status(200).json("OK");
      break;
    case "PUT":
      console.log(req.body);
      break;
    default:
      break;
  }
}
