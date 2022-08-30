import React from 'react'
import { Flex, Box, Text, Img, Button, Stack, useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'
import PostModal from './PostModal'

const PokemonTeam = ({team, teamHandler}) => {
  const {user} = useAuth()
  const {isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box width="600px" margin={"auto"} borderRadius={"20px"}
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
    </Flex>
    <Flex justifyContent={"center"}>
      <Stack>      
      {user &&
      <Button onClick={onOpen}>Post team!</Button>
      }
      <PostModal isOpen={isOpen} onClose={onClose} team={team} />
      <Button marginBottom="10px" onClick={teamHandler.teamClear}>Clear team</Button>
      </Stack>
    </Flex>
    </Box>
    </>
  )
}

export default PokemonTeam