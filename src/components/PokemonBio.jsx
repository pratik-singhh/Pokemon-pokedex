import { useEffect, useState } from "react";
import background from '../assets/Bg.png'
import { Link, useParams } from "react-router-dom";
function PokemonBio() {
  const [pokemonBio, setPokemonBio] = useState(null);
  const { id } = useParams();
  const idNo = Number(id);
  const prevId = idNo - 1;
  const nextId = idNo + 1;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() =>
      setAnimate(true)

      , 1000);


  }, [id])


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

  let typeColors = {
    fire: "bg-red-700",
    water: "bg-blue-500",
    grass: "bg-green-500",
    flying: "bg-sky-400",
    steel: "bg-gray-400",
    fairy: "bg-pink-400",
    dragon: "bg-cyan-800",
    bug: "bg-green-300",
    dark: "bg-violet-800",
    ghost: "bg-indigo-500",
    normal: "bg-orange-300",
    psychic: "bg-pink-300",
    rock: "bg-amber-400",
    ground: "bg-amber-700",
    ice: "bg-sky-200",
    fighting: "bg-red-400",
    electric: "bg-yellow-400",
    poison: "bg-purple-400",
  }
  return (
    <>
      <div className="min-h-screen flex items-center relative flex-col w-full min-h-screen justify-center  text-center ">
        <img src={background} alt="" className="absolute inset-0 blur-sm min-w-screen min-h-screen object-cover z-0 " />
        <div className="z-10 flex-none items-start text-left">


          <Link to={"/"} className="z-10 flex-none">
            <h1 className="z-20 ml-5 mt-2 rounded-md bg-indigo-400 border-2 max-w-20 p-4">Home</h1>


          </Link>
        </div>


        <div className="items-center flex flex-col p-4 rounded-lg shadow-blue-800 shadow-lg bg-rose-300 z-10">

          <img className="object-contain h-32" src={pokemonBio.sprites.other["official-artwork"].front_default} alt="" />

          <h1>{pokemonBio.name.charAt(0).toUpperCase() + pokemonBio.name.slice(1)}</h1>

          <div className="flex gap-5 mt-10">
            {pokemonBio.types.map((element, index) =>

              (<h1 className={`pl-3 pr-3 pt-3 pb-3 text-white rounded-lg ${typeColors[element.type.name] || "bg-gray-400"} mb-5`} key={index}>{element.type.name}</h1>)

            )}
          </div>

          <div className="w-full items-start">

            {pokemonBio.stats.map((stat, index) => (
              <div key={stat.stat.name} className="flex flex-row justify-between w-80">

                <h1 className="whitespace-nowrap min-w-40 text-left  " >
                  {stat.stat.name.toUpperCase().replace('-', ' ')}

                </h1 >
                <h1 className="min-w-12" >
                  {stat.base_stat}
                </h1>
                <div className="bg-lime-300 min-w-30 h-5 rounded-lg ">

                  <div
                    className={` h-5 transition-all duration-700 ease-out rounded-lg bg-fuchsia-500 `}
                    style={{ width: animate ? `${(stat.base_stat / 140) * 100}%` : "0%" }}
                  >


                  </div>
                </div>

              </div>
            ))}
          </div>


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
      </div >



    </>
  )
}

export default PokemonBio
