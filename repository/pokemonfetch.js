export async function fetchOnePokemon(id) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (data) => data.json()
  );
  return pokemon;
}
