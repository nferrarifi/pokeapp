import React from 'react'
import {Box, Flex, Img} from "@chakra-ui/react"
import Link from 'next/link'


const Nav = () => {
  return (
    <Flex width="100%" padding={"20px"} borderBottom="1px" dropShadow={"1px"} justifyContent="center">
    <Box >
      <Link href="/">
      <a>
        <Img width={"200px"} src='/img/title.png' opacity={"1"}/>
      </a>
      </Link>
    </Box>
    <Box>
    </Box>
    </Flex>
  )
}

export default Nav