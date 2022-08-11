import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import { getAllPokemon } from "../repository/pokemondb";
import InfiniteScroll from "react-infinite-scroll-component";

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
            <SearchBar />

            {/*             <InfiniteScroll
              dataLength={allPokemon.length}
              next={setUpdater}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            > */}
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
            {/*             </InfiniteScroll> */}
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
