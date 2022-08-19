import React from 'react'
import {Box, Button, Flex, Img, useDisclosure} from "@chakra-ui/react"
import Link from 'next/link'
import RegisterModal from './RegisterModal'


const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex width="100%" padding={"20px"} borderBottom="1px" dropShadow={"1px"}>
    <Box >
      <Link href="/">
      <a>
        <Img width={"250px"} src='/img/title.png' opacity={"1"}/>
      </a>
      </Link>
    </Box>
      <Box position={"absolute"} right="20px">
        <Button onClick={onOpen} margin="20px">Sign Up</Button>
        <Button>Login</Button>
      </Box>
      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default Nav