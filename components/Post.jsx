import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Stack, Img, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {config} from "@fortawesome/fontawesome-svg-core"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { fetchLikes } from "../repository/postfetch";
config.autoAddCss = false
const Post = ({ title, team, nickname, date, likes, id }) => {
  const [currentLikes, setCurrentLikes] = useState(likes.length)
  const {user} = useAuth()
  const toast = useToast()
  const likesHandler = () => {
    //Prevent not logged guests from liking posts
    if (!user) {
      toast ({
          title: "Error",
          description: `Please login to your account in order to like posts!`,
          status: "error",
          duration: 2500,
          isClosable: true,
      })
    }
    //Verify if account hasn't already liked the post, then send the data to backend and also update state to show real time changes
    if (user && (likes.indexOf (user.uid) === -1)) {
      console.log ("Like request received")
      likes.push (user.uid)
      setCurrentLikes(likes.length)
      fetchLikes(id, likes)
    }
    else if (user && (likes.indexOf (user.uid) !== -1)){
      console.log ("Dislike request received")
      likes.pop()
      setCurrentLikes(likes.length)
      fetchLikes(id, likes)
    }
    }


  return (
    <>
      <Flex alignItems="center">
        <Box
          w="700px"
          borderWidth="1px"
          borderRadius="0.375rem"
          overflow="hidden"
          marginTop="25px"
          p="20px"
          borderColor="teal"
          bg="gray.700"
        >
          <Box>
              <Text fontSize="25px" fontFamily={"Impact"} color="#efefef">{title}</Text>
          </Box>
          <Box height={"150px"}>
            {team && 
            team.map ((pokeid) =>
            <Stack key={pokeid} display="inline">
            <Img
            src={
              `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-ii/crystal/transparent/${pokeid}.png`
            }
            mb={4}
            borderRadius={"0px"}
            display="inline"
            pos={'relative'}
            justifyContent="center"
            marginTop="20px"
            loading="lazy"
          />
          </Stack>
          )}
        </Box>
        <Box textAlign={"left"}>
        <Text marginBottom={"10px"} fontSize="12px" color="white">Posted by: {nickname} on {date} </Text>
        <Box display="inline" fontSize={"25px"}>
          <Text color="white" marginRight="10px" display="inline">{currentLikes &&
          currentLikes
          }</Text>
          <Box margin="0px" onClick={() => likesHandler()} color="white" _hover={{
            color:"teal.300",
            cursor:"pointer"
          }} display="inline" transition="0.3s">
            <Flex display={"inline-flex"}>
            <FontAwesomeIcon display="inline" width={"20px"} icon={faThumbsUp} />
            </Flex>
          </Box>
        </Box>
        </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Post;
