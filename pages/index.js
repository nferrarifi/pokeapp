import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../components/Nav";
import PokemonCard from "../components/PokemonCard";
import { getAllPokemon } from "../repository/pokemondb";

export default function Home({ allPokemon }) {
  return (
    <>
      <Box bg={"#607d8b"}>
        <Head>
          <title>Poke App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box>
          <Nav />
          <Box marginLeft={"250px"} marginRight={"250px"}>
            <Flex
              maxW={"100%"}
              flexDirection={"row"}
              justifyContent="center"
              flexWrap={"wrap"}
            >
              {allPokemon &&
                allPokemon?.map((pokemon) => {
                  return (
                    <PokemonCard
                      pokeid={pokemon.pokeid}
                      name={pokemon.name}
                      types={pokemon.types}
                    />
                  );
                })}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps(context) {
  const allPokemon = await getAllPokemon();
  return {
    props: { allPokemon }, // will be passed to the page component as props
  };
}
