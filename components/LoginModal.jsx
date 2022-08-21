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
    FormLabel,
    Input,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const LoginModal = ({isOpen, onClose}) => {
    const {user, login} = useAuth()
    const [User, setUser] = useState();
    const [Password, setPassword] = useState();
    const handleLogin = async (User, Password) => {
      if (!user){
      try {
        await login (User, Password)
        onClose()
      } catch (err) {
        console.log(err)
      }
    }
      else {
        toast({
          title: "Register Error",
          description: "Please log out before logging in to a new account",
          status: "error",
          position: "bottom",
          duration: 2000,
          isClosable: true,
        });
      }
  }
    return (
      <>
        <Modal size={"md"} blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent bg="rgba(176, 219, 234, 0.8)"
          backdropFilter={"auto"}
          backdropBlur={"10px"} >
            <ModalHeader fontSize={"45px"} textAlign={"center"}>Login
             </ModalHeader>
            <ModalCloseButton />
            <ModalBody margin={"auto"}>
                <Box align={"center"} fontWeight='bold' mb='1rem'>
                <FormLabel>Email</FormLabel>
                <Input background={"#efefef"} onKeyUpCapture={(e) => setUser(e.target.value)}></Input>
                <FormLabel>Password</FormLabel>
                <Input type={"password"} background={"#efefef"} onKeyUpCapture={(e) => setPassword(e.target.value)}></Input>
                </Box>
            </ModalBody>
            <ModalFooter margin={"auto"}>
            <Button mr={3} onClick={() => handleLogin(User, Password)}>
                Login
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

export default LoginModal