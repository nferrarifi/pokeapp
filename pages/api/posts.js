import { getAllPosts } from "../../repository/postdb";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const posts = await getAllPosts();
      res.status(200).json(posts);
      break;
    /*       case "POST":
        console.log("Post successful");
        await createPost(req.body);
        res.status(200).json("OK");
        break;
      default:
        break; */
  }
}
