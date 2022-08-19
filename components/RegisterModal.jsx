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
import { app } from "../firebase/client";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const client = app
const auth = getAuth();
const RegisterModal = ({isOpen, onClose}) => {
    const [User, setUser] = useState();
    const [Password, setPassword] = useState();
    return (
      <>
        <Modal size={"md"} blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent bg="rgba(176, 219, 234, 0.8)"
          backdropFilter={"auto"}
          backdropBlur={"10px"} >
            <ModalHeader fontSize={"45px"} textAlign={"center"}>Sign Up
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
            <Button mr={3} onClick={() => createUserWithEmailAndPassword(auth, User, Password).then((userData) => onClose())}>
                Sign Up
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

export default RegisterModal