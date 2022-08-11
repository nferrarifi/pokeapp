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
    Img,
    SimpleGrid,
    Spinner,
  } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { fetchOnePokemon } from '../repository/pokemonfetch'



export default function PokemonModal({isOpen, onClose, pokeid}) {
let updater = 0

if (isOpen){
 updater++
}

async function pokeFetch (){
  if (updater>0){
    fetchOnePokemon(pokeid).then ((poke) => setPokemon(poke))
  }
}

const [Pokemon, setPokemon] = useState()

useEffect(() => {
  pokeFetch()
}, [updater])



    return (
      <>
        <Modal size={"md"} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent bg="grey">
            <ModalHeader textAlign={"center"}> {Pokemon && 
            Pokemon.name}
            {!Pokemon && <Spinner /> }
             </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Img
            src={
              `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-ii/crystal/transparent/${pokeid}.png`
            }
            mb={4}
            borderRadius={"0px"}
            pos={'relative'}
            margin="auto"
          />
            <SimpleGrid columns={2} spacing={10}>
                <Box align={"center"} fontWeight='bold' mb='1rem'>
                <Text borderBottom={"1px"} fontSize={"24px"}>Types</Text>
                {Pokemon &&
                Pokemon.types.map(({type}) => <Text fontWeight={"500"}>{type.name} </Text> )}
                {!Pokemon && <Spinner />}
                </Box>
                <Box align={"center"} fontWeight='bold' mb='1rem'>
                <Text borderBottom={"1px"} fontSize={"24px"}>Abilities</Text>
                {Pokemon &&
                Pokemon.abilities.map(({ability}) => <Text fontWeight={"500"}>{ability.name} </Text> )}
                {!Pokemon && <Spinner />}                
                </Box>
            </SimpleGrid>
            </ModalBody>
  
            <ModalFooter margin={"auto"}>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='orange'>Add</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }