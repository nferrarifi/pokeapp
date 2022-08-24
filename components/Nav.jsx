import React from 'react'
import {Box, Button, Flex, Img, useDisclosure, Text, Center} from "@chakra-ui/react"
import Link from 'next/link'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import { useAuth } from '../context/AuthContext'


const Nav = () => {
  const { isOpen: isOpenRegister, onOpen: onOpenRegister, onClose: onCloseRegister } = useDisclosure()
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure()
  const {user, logout} = useAuth()
  console.log (user)
  const handleLogout = async () => {
    await logout()
  }
  return (
    <Flex width="100%" padding={"20px"} borderBottom="1px" dropShadow={"1px"}>
    <Box>
      <Link href="/">
      <a>
        <Img width={"250px"} src='/img/title.png' opacity={"1"}/>
      </a>
      </Link>
    </Box>
    <Center color="white" marginTop={"20px"} marginLeft="25px">
     <Link href="posts"><a>See shared teams</a></Link>
    </Center>
      <Box position={"absolute"} right="20px">
        {!user &&
        <>
                <Button onClick={onOpenRegister} margin="20px">Sign Up</Button>
                <Button onClick={onOpenLogin}>Login</Button>        
                <RegisterModal isOpen={isOpenRegister} onClose={onCloseRegister} />
                <LoginModal isOpen={isOpenLogin} onClose={onCloseLogin} />
        </>
        }
        {
          user &&
          <>
          <Text color="white" marginTop="30px" fontSize={"20px"} fontWeight="300">User: <Text as="span" display="inline" fontWeight={"400"}>{user.email}</Text></Text>
          <Center><Button onClick={() => handleLogout()} margin="10px" fontWeight="300" fontSize={"20px"} _hover={{
            bg: "black",
            color: "white"
          }}>Logout</Button></Center>
          </>
        }
      </Box>
    </Flex>
  )
}

export default Nav