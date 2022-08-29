import config from "../config";

export async function fetchAllPosts() {
  const posts = await fetch(`${config.baseURL}/api/posts`).then((data) =>
    data.json()
  );
  return posts;
}

export async function fetchLikes(id, likes) {
  return fetch(`${config.baseURL}/api/posts`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      likes,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
