import { Box, Flex, Input, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import PokemonCard from "../components/PokemonCard";
import PokemonTeam from "../components/PokemonTeam";
import { getAllPokemon } from "../repository/pokemondb";

export default function Home({ allPokemon }) {
  const [Pokemon, setPokemon] = useState("");

  //Logic for Pokemon Team building feature
  const [team, setTeam] = useState([]);

  function teamHandler(pokeid) {
    if (team.length < 6) {
      setTeam([...team, pokeid]);
    } else {
      alert("Your team cannot have more than 6 Pokémon");
    }
  }

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
          {team.length > 0 && <PokemonTeam team={team} />}
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
                        teamHandler={teamHandler}
                        team={team}
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
