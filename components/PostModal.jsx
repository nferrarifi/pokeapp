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
    Img
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import moment from 'moment'

const PostModal = ({isOpen, onClose, team}) => {
    console.log(moment())
    const {user} = useAuth()
    const [title, setTitle] = useState()
    const [nickname, setNickname] = useState()
    const postHandler = async () => {
      return fetch('http://localhost:3000/api/posts', {
        method: "POST",
        body: JSON.stringify({
          team: team.map((poke) => JSON.stringify(poke)),
          user: user.uid,
          title: title || "Untitled",
          date: moment().utcOffset(-3).format("YYYY-MM-DD HH:mm") + " GMT -3"
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    return (
      <>
        <Modal size={"md"} blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent bg="rgba(176, 219, 234, 0.8)"
          backdropFilter={"auto"}
          backdropBlur={"10px"} >
            <ModalHeader fontSize={"25px"} textAlign={"center"}>Please name your team
             </ModalHeader>
            <ModalCloseButton />
            <ModalBody margin={"auto"}>
          <Box align={"center"} fontWeight='bold' mb='1rem'>
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