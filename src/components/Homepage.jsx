import { useState, useEffect } from 'react'
import fetchPokemon from '../services/APIstuff';
import PokemonCard from '../components/PokemonCard';
function Homepage() {

  const [searchTerm, setSearchTerm] = useState("");

  const [pokemons, setPokemons] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function theFetch() {
      let incomingPokemon = await fetchPokemon();
      setPokemons(incomingPokemon);
      setLoading(false);

    }
    theFetch();

  }, [])

  let filteredPokemon = pokemons.filter((pokeObject) =>
  (pokeObject.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));



  return (
    <>

      <div>


        <div className='text-center justify-center flex'>

          <input onChange={(e) => { setSearchTerm(e.target.value) }} className=' max-w-md p-2 rounded-xl border m-4' value={searchTerm} placeholder='Search Pokemon' type="text" />

        </div>
        {(loading === true) && (<h1 className='text-3xl text-fuchsia-400'>Loading ...</h1>)}

        {(loading === false) &&



          <div>

            {(filteredPokemon.length > 0) &&
              <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>

                {filteredPokemon.map((element, index) => (
                  <PokemonCard key={element.name} url={element.url} name={element.name} />
                ))}



              </div>
            }
            {(filteredPokemon.length === 0) && (<h1 className='text-3xl text-red-600'>Pokemon Not Found</h1>)}

          </div>

        }


      </div>
    </>
  )
}

export default Homepage
