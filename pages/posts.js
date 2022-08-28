import { Box, Center, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Post from "../components/Post";
import { fetchAllPosts } from "../repository/postfetch";

const posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchAllPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <>
      <Box
        bg={"#607d8b"}
        backgroundImage="/img/kanto-background2.png"
        backgroundSize={"unset"}
        backgroundRepeat="no-repeat"
        backgroundAttachment={"fixed"}
        minHeight={"100vh"}
      >
        <Nav />
        <Box>
          {posts &&
            posts.map((post) => (
              <Center align="center">
                <Post
                  title={post.title}
                  team={post.team}
                  user={post.user}
                  date={post.date}
                  nickname={post.nickname}
                  likes={post.likes}
                  id={post.id}
                ></Post>
              </Center>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default posts;
