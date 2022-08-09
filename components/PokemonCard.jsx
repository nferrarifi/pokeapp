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
  } from '@chakra-ui/react';
  
  export default function PokemonCard({name, pokeid, types}) {
    return (
    <Box key={pokeid} margin="20px">
      <Center py={6}>
        <Box
            borderRadius={"3px"}
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
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
            </Heading>
          <Divider></Divider>
          <Text
            marginTop={"10px"}
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
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
              >
              Add
            </Button>
          </Stack>
        </Box>
      </Center>
      </Box>
    );
  }