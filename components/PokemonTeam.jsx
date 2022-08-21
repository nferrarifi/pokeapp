import React from 'react'
import { Flex, Box, Text, Img, Button } from '@chakra-ui/react'

const PokemonTeam = ({team, teamHandler}) => {
  return (
    <>
    <Box width="35%" margin={"auto"} borderRadius={"20px"}
          bg="rgba(255, 255, 255, 0.3)"
          backdropFilter={"auto"}
          backdropBlur={"3px"}
          >
        <Box color="#efefef" textAlign={"center"} display={"block"}>
            <Text fontSize={"25px"} fontWeight="bold">My Team</Text>
        </Box>
        <Flex color={"white"} justifyContent="center" alignContent={"center"} flexDir={"row"}>
        <Box height={"150px"}>
            {team && 
            team.map ((pokeid) => 
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
          )
            }
        </Box>
    </Flex>
    <Flex justifyContent={"center"}>
      <Button marginBottom="10px" onClick={teamHandler.teamClear}>Clear team</Button>
    </Flex>
    </Box>
    </>
  )
}

export default PokemonTeam