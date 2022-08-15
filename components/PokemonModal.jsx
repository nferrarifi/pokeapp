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
//Logic required for modal to only fetch when opened, in order to avoid the fetching to occur 151+ times during rendering
let updater = 0
if (isOpen){
 updater++
}

const [Pokemon, setPokemon] = useState()

useEffect(() => {
  pokeFetch()
}, [updater])


//Logic for random move set feature
const [Moves, setMoves] = useState()
let randomMoveSet = []
const createRandomMoveSet = (poke) => {
  for(let i = 0; i<4; i++){
    let randomMove = Math.floor(Math.random() * (poke.moves.length - 1) +1)
    randomMoveSet.push (poke.moves[randomMove].move.name)
  }
}
//End of move set feature logic

async function pokeFetch (){
  if (updater>0){
    await fetchOnePokemon(pokeid).then ((poke) => {
    createRandomMoveSet(poke)
    setMoves (randomMoveSet)
    setPokemon(poke)
  })
  }
}




    return (
      <>
        <Modal key={pokeid} size={"md"} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent bg="rgba(176, 219, 234, 0.8)"
          backdropFilter={"auto"}
          backdropBlur={"10px"} >
            <ModalHeader fontSize={"45px"} textAlign={"center"}> {Pokemon && 
            Pokemon.name}
            {!Pokemon && <Spinner /> }
             </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Img
            src={
              `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${pokeid}.png`
            }
            mb={4}
            borderRadius={"0px"}
            pos={'relative'}
            margin="auto"
            loading='lazy'
            width={"70%"}
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
            <Text fontSize={"24px"} align="center" fontWeight={"bold"} marginTop="10px" borderBottom={"1px"}>Random possible moveset</Text>      
                <Box align={"center"} fontWeight='bold' mb='1rem'>
                 <SimpleGrid columns={2} spacing={1}>
                 {Moves &&
                  Moves.map ((move, index) => <Text bg="#7f9fb0" padding={"10px"} key={index} color="#efefef" fontWeight={"500"} margin="10px" fontSize={"20px"} borderRadius={"8px"}>{move}</Text>)
                  }
                </SimpleGrid>
                </Box>
            </ModalBody>
            <ModalFooter margin={"auto"}>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }