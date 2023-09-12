import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import Movies from './components/Movies';
import Reflect from './components/Reflect';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Homepage/>}  />
     <Route path="/movies" element={<Movies/>}  />
     <Route path="/reflect" element={<Reflect/>}  />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
