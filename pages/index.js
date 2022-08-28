import { Box, Flex, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Nav from "../components/Nav";
import PokemonCard from "../components/PokemonCard";
import PokemonTeam from "../components/PokemonTeam";
import { useAuth } from "../context/AuthContext";
import { getAllPokemon } from "../repository/pokemondb";
export default function Home({ allPokemon }) {
  const user = useAuth();
  console.log(user);
  const [PokemonQuery, setPokemonQuery] = useState("");

  //Logic for Pokemon Team building feature
  const [team, setTeam] = useState([]);
  const toast = useToast();
  const teamHandler = {
    teamAdd: (pokeid, name) => {
      if (team.length < 6) {
        setTeam([...team, pokeid]);
        toast({
          title: "Pokémon added successfully",
          description: `${name} has been successfully added to your team`,
          status: "success",
          duration: 2500,
          isClosable: true,
        });
      } else {
        toast({
          title: "Pokemon team size limit",
          description: "Your team cannot have more than 6 Pokémon!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    },
    teamRemove: (pokeid) => {
      setTeam(team.filter((poke) => poke !== pokeid));
    },
    teamClear: () => {
      setTeam([]);
      toast({
        title: "Pokemon team cleared",
        description: `Your team has been cleared`,
        status: "warning",
        duration: 2500,
        isClosable: true,
      });
    },
  };

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
        <Box>
          <Nav />
          {team.length > 0 && (
            <PokemonTeam team={team} teamHandler={teamHandler} />
          )}
          <Box marginLeft={"250px"} marginRight={"250px"}>
            <Box width={"50%"} margin="auto" marginTop={"10px"}>
              <Input
                onKeyUpCapture={(e) => setPokemonQuery(e.target.value)}
                bg="rgba(148, 148, 148, 0.8)"
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
                  ?.filter((Pokemon) =>
                    PokemonQuery === ""
                      ? Pokemon
                      : Pokemon.name.includes(PokemonQuery.toLowerCase())
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
