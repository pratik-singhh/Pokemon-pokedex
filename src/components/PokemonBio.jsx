import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function PokemonBio() {
  const [pokemonBio, setPokemonBio] = useState(null);
  const { id } = useParams();
  const idNo = Number(id);
  const prevId = idNo - 1;
  const nextId = idNo + 1;


  useEffect(() => {
    async function bioFetch() {

      const pokeBioDataRaw = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      const pokeBioData = await pokeBioDataRaw.json();
      setPokemonBio(pokeBioData);


      console.log(pokeBioData);
      console.log(pokeBioData.stats);

    }
    bioFetch();

  }, [id])

  if (pokemonBio === null) {
    return "Loading";
  }

  return (
    <>

      <Link to={"/"}>
        <h1 className="ml-5 mt-2">Home</h1>


      </Link>


      <div className="flex items-center flex-col justify-center text-center">
        <img className="object-contain h-32" src={pokemonBio.sprites.other["official-artwork"].front_default} alt="" />

        <h1>{pokemonBio.name.charAt(0).toUpperCase() + pokemonBio.name.slice(1)}</h1>

        {pokemonBio.types.map((element, index) =>
          (<h1 key={index}>{element.type.name}</h1>)
        )}

        {pokemonBio.stats.map((stat, index) => (
          <h1 key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</h1>
        ))}


        <div className="flex gap-24 mt-10">

          {(idNo > 1) &&
            <Link to={`/pokemon/${prevId}`}>

              <h1>Previous Pokemon</h1>
            </Link>
          }
          <Link to={`/pokemon/${nextId}`}>
            <h1>Next Pokemon</h1>

          </Link>
        </div>
      </div>



    </>
  )
}

export default PokemonBio
