export async function fetchAllPosts() {
  const posts = await fetch(`http://localhost:3000/api/posts`).then((data) =>
    data.json()
  );
  return posts;
}
