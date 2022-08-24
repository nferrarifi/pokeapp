import { Box } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/Nav";

const posts = () => {
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
      </Box>
    </>
  );
};

export default posts;
