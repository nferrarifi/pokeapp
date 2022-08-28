import { createPost, getAllPosts, likePost } from "../../repository/postdb";

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
      break;
    case "PUT":
      const { id, likes } = req.body;
      await likePost(id, likes);
      console.log("ok!");
      res.status(200).json("OK");
      break;
    default:
      break;
  }
}
