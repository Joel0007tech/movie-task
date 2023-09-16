import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import Movies from './components/Movies';
import Reflect from './components/Reflect';
import Series from './components/Series';
import Upcoming from './components/Upcoming';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Homepage/>}  />
     <Route path="movie/:id" element={<Movies/>}  />
     <Route path="/reflect" element={<Reflect/>}  />
     <Route path="/series" element={<Series/>}  />
     <Route path="/upcoming" element={<Upcoming/>}  />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
