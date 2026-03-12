import { Link } from "react-router-dom";
function PokemonCard({ name, url }) {

  const pokeId = url.split("pokemon/")[1].split("/")[0];
  const pokeSpriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeId + ".png";
  const pokeArtUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokeId + ".png";

  name = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>


      <Link to={`/pokemon/${pokeId}`}>
        <div className=" hover:shadow-lg shadow-blue-400 cursor-pointer hover:scale-105 ease-in transform-gpu transition-all m-3 p-3 border-2 rounded-lg justify-center items-center flex flex-col">
          <img className=" h-24 object-contain" src={pokeArtUrl} alt={name} />
          <h1>{name}</h1>

        </div>
      </Link>
    </>
  )
}

export default PokemonCard
