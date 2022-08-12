import {
    Heading,
    Img,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    useColorModeValue,
    Divider,
    Spinner
  } from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';
import PokemonModal from './PokemonModal';
import { useEffect, useState } from 'react';
import { fetchOnePokemon } from '../repository/pokemonfetch';

  
  export default function PokemonCard({name, pokeid, types}) {


    const {isOpen, onOpen, onClose } = useDisclosure()
    
    return (
    <Box key={pokeid} margin="20px">
      <Center py={6}>
        <Box
            borderRadius={"20px"}
          bg="#8eacbb"
          maxW={'250px'}
          w={'220px'}
          boxShadow={'2xl'}
          p={6}
          textAlign={'center'}>
          <Img
            size={'xl'}
            src={
              `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-ii/crystal/transparent/${pokeid}.png`
            }
            mb={4}
            borderRadius={"0px"}
            pos={'relative'}
            margin="auto"
            loading="lazy"
          />
          <Heading fontSize={'25px'} fontFamily={'body'}>
            {name}
            </Heading>
          <Divider></Divider>
          <Text
            marginTop={"10px"}
            textAlign={'center'}
            fontSize="20px"
            color={"useColorModeValue('gray.700', 'gray.400')"}
            fontWeight="500"
            px={3}>
            {types&& 
            types?.map((type)=>(type.name + " "))}
          </Text>
            
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              color="#efefef"
              margin="auto"
              fontSize={'sm'}
              rounded={'full'}
              bg="teal"
              _hover={{
                bg:"teal.300",
                color:"black",

              }}
              transition="all 0.3s"
              onClick={onOpen}
              >
              View details
            </Button>
          </Stack>
        </Box>
      </Center>
      <PokemonModal isOpen={isOpen} onClose={onClose} pokeid={pokeid} />
      </Box>
    );
  }