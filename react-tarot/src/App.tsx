import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { LandingPage } from './Components/LandingPage';
import CategoryPannel from './Components/Categories';
import Signup from './Components/Signup';
import ThreeFates from './Components/ThreeFates';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Routes>

      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/categ" element={<CategoryPannel/>}></Route>
      <Route path="/draw" element={<ThreeFates/>}></Route>

     </Routes>
     </BrowserRouter>
    
   
     


    </div>
  );
}


export default App;
