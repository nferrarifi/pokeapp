import React from 'react'
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Stack,
    Img,
    Text
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import moment from 'moment'

const PostModal = ({isOpen, onClose, team}) => {
    const router = useRouter()
    const {user} = useAuth()
    const [title, setTitle] = useState()
    const [nickname, setNickname] = useState()
    const postFetch = async () => {
      await fetch(`${config.baseURL}/api/posts`, {
        method: "POST",
        body: JSON.stringify({
          team: team.map((poke) => JSON.stringify(poke)),
          user: user.uid,
          title: title || "Untitled",
          nickname: nickname || "Anonymous",
          date: moment().utcOffset(-3).format("YYYY-MM-DD HH:mm") + " GMT -3"
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      ;
    };

    const postHandler = async () => {
      postFetch()
      onClose()
      router.push ("/posts")
    }
    return (
      <>
        <Modal size={"md"} blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent bg="rgba(176, 219, 234, 0.8)" backdropFilter={"auto"} backdropBlur={"10px"} >
            <ModalHeader marginTop="15px" fontSize={"20px"} textAlign={"center"}>To proceed, please complete the following</ModalHeader>
            <ModalCloseButton />
          <ModalBody margin={"auto"}>
              <Box align={"center"} fontWeight='bold' mb='1rem'>
                <Text>Your nickname</Text>
                <Input background={"#efefef"} onKeyUpCapture={(e) => setNickname(e.target.value)}></Input>
                <Text>Team name</Text>
                <Input background={"#efefef"} onKeyUpCapture={(e) => setTitle(e.target.value)}></Input>
              </Box>
                <Box>
                  {team && 
                  team.map ((pokeid) =>
                  <Stack display="inline">
                  <Img
                  src={
                    `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-vii/icons/${pokeid}.png`
                  }
                  mb={4}
                  borderRadius={"0px"}
                  display="inline"
                  pos={'relative'}
                  justifyContent="center"
                  loading="lazy"
                />
                </Stack>
                )}
                </Box>
          </ModalBody>
            <ModalFooter margin={"auto"}>
            <Button onClick={() => postHandler()} mr={3}>
                Post!
              </Button>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default PostModal