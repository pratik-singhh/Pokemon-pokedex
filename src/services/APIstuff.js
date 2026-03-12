async function fetchPokemon() {

  let pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  let pokemondata = await pokemons.json();

  return pokemondata.results;


}
export default fetchPokemon
