import PokemonBio from './components/PokemonBio';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/"
            element={<Homepage />} />

          <Route path="/pokemon/:id"
            element={<PokemonBio />} />

        </Routes >
      </BrowserRouter>
    </>

  );
}

export default App
