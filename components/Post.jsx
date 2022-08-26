import React from "react";
import { Box, Text, Flex, Center, Stack, Img, } from "@chakra-ui/react";
const Post = ({ title, team, user, date }) => {
  return (
    <>
      <Flex alignItems="center">
        <Box
          w="100%"
          borderWidth="1px"
          borderRadius="0.375rem"
          overflow="hidden"
          marginTop="25px"
          p="20px"
          borderColor="teal"
          bg="gray.700"
        >
          <Box>
              <Text marginLeft={"5%"} fontSize="20px" color="white">{title}</Text>
          </Box>
          <Box height={"150px"}>
            {team && 
            team.map ((pokeid) =>
            <Stack display="inline">
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
        <Text marginLeft={""} fontSize="12px" color="white">Post Date: {date}  </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Post;
