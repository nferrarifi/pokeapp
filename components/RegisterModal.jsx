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
    useToast
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useRef } from 'react';

const RegisterModal = ({isOpen, onClose}) => {
    const emailInput = useRef()
    const passwordInput = useRef()
    const toast = useToast()
    const {user, signUp} = useAuth()
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const handleRegister = async (Email, Password) => {
      if (!user){
          try {
            await signUp (Email, Password)
            onClose()
          } catch (err) {
            console.log(err)
            toast({
              title: "Register Error",
              description: "Please enter a valid, unused email, and a 6+ characters long password",
              status: "error",
              position: "bottom",
              duration: 3000,
              isClosable: true,
            })
          }
        }
      else {
        toast({
          title: "Register Error",
          description: "Please log out before creating a new account",
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
            <ModalHeader fontSize={"45px"} textAlign={"center"}>Sign Up
             </ModalHeader>
            <ModalCloseButton />
            <ModalBody margin={"auto"}>
                <Box align={"center"} fontWeight='bold' mb='1rem'>
                <FormLabel>Email</FormLabel>
                <Input ref={emailInput} type={"email"} required="true" background={"#efefef"} onKeyUpCapture={(e) => setEmail(e.target.value)}></Input>
                <FormLabel>Password</FormLabel>
                <Input ref={passwordInput} type={"password"} background={"#efefef"} onKeyUpCapture={(e) => setPassword(e.target.value)}></Input>
                </Box>
            </ModalBody>
            <ModalFooter margin={"auto"}>
            <Button mr={3} onClick={() => handleRegister(Email, Password)}>
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