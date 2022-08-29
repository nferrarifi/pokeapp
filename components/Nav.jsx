import React from 'react'
import {Box, Button, Flex, Img, useDisclosure, Text, Center, HStack, UnorderedList, ListItem} from "@chakra-ui/react"
import Link from 'next/link'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import { useAuth } from '../context/AuthContext'


const Nav = () => {
  const { isOpen: isOpenRegister, onOpen: onOpenRegister, onClose: onCloseRegister } = useDisclosure()
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure()
  const {user, logout} = useAuth()
  const handleLogout = async () => {
    await logout()
  }
  return (
    <Flex width="100%" bg="rgba(0, 0, 0, 0.3)" borderBottom="5px solid rgba(109, 169, 157, 0.8)" padding={"20px"} dropShadow={"1px"}>
    <Box >
      <Link href="/">
      <a>
        <Img width={"120px"} src='/img/title.png' opacity={"1"}/>
      </a>
      </Link>
    </Box>
    <Center color="white">
    <UnorderedList >
    <ListItem _hover={{bg:"black",color:"#efefef"}} transition="all 0.4s"  marginLeft="20px" fontSize="15px" padding="10px" borderRadius={"8px"} bg="gray.500" display="inline"><Link href="/"><a>Home</a></Link></ListItem>
    <ListItem _hover={{bg:"black",color:"#efefef"}} transition="all 0.4s"  marginLeft="20px" fontSize="15px" padding="10px" borderRadius={"8px"} bg="gray.500" display="inline"><Link href="/posts"><a>Shared teams</a></Link></ListItem>
    </UnorderedList>
    </Center>
      <Box position={"absolute"} top="25px" right="20px">
        {!user &&
        <>
          <HStack>
                <Button  _hover={{bg:"black",color:"#efefef"}} transition="all 0.4s"  marginLeft="20px" fontSize="15px" padding="10px" borderRadius={"8px"} bg="gray.500" display="inline"
                onClick={onOpenRegister}
                >
                  Sign Up
                  </Button>
                <Button _hover={{bg:"black",color:"#efefef"}} transition="all 0.4s"  marginLeft="20px" fontSize="15px" padding="10px" borderRadius={"8px"} bg="gray.500" display="inline"            
                onClick={onOpenLogin}>
                  Login
                  </Button>        
                <RegisterModal isOpen={isOpenRegister} onClose={onCloseRegister} />
                <LoginModal isOpen={isOpenLogin} onClose={onCloseLogin} />
          </HStack>
        </>
        }
        {
          user &&
          <>
          <Text color="white" fontSize={"13px"} fontWeight="300">User: <Text as="span" display="inline" fontWeight={"400"}>{user.email}</Text></Text>
          <Center><Button onClick={() => handleLogout()} _hover={{bg:"black",color:"#efefef"}} transition="all 0.4s"  marginLeft="20px" fontSize="15px" padding="10px" borderRadius={"8px"} bg="gray.500" display="inline">Logout</Button></Center>
          </>
        }
      </Box>
    </Flex>
  )
}

export default Nav