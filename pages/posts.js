import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Post from "../components/Post";
import { fetchAllPosts } from "../repository/postfetch";

const Posts = () => {
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
              <Center key={post.id} align="center">
                <Post
                  key={post.id}
                  title={post.title}
                  team={post.team}
                  user={post.user}
                  date={post.date}
                  nickname={post.nickname}
                  likes={post.likes}
                  id={post.id}
                />
              </Center>
            ))}
          {posts.length < 1 && (
            <Center marginTop="50px">
              <Text display="block" color="white">
                Loading teams, please wait...
              </Text>
              <Spinner
                marginLeft="20px"
                display="block"
                color="white"
                size="md"
              />
            </Center>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Posts;
