import { Box, Flex, Input } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import Nav from "../components/Nav";
import PokemonCard from "../components/PokemonCard";
import { getAllPokemon } from "../repository/pokemondb";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home({ allPokemon }) {
  const [Pokemon, setPokemon] = useState("");
  return (
    <>
      <Box
        bg={"#607d8b"}
        backgroundImage="/img/kanto-background2.png"
        backgroundSize={"unset"}
        backgroundRepeat="no-repeat"
        backgroundAttachment={"fixed"}
        minHeight={"100vh"}
      >
        <Head>
          <title>Poke App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box>
          <Nav />
          <Box marginLeft={"250px"} marginRight={"250px"}>
            <Box width={"50%"} margin="auto" marginTop={"10px"}>
              <Input
                onKeyUpCapture={(e) => setPokemon(e.target.value)}
                name="searchQuery"
                placeholder="Search a specific Pokemon"
                color={"White"}
                _placeholder={{ color: "white" }}
              ></Input>
            </Box>
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
                allPokemon
                  ?.filter((allPokemon) =>
                    Pokemon === ""
                      ? allPokemon
                      : allPokemon.name.includes(Pokemon.toLowerCase())
                  )
                  .map((pokemon) => {
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
