import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Header from './Components/Header';
import Button from './Components/Button';


import { LandingPage } from './Components/LandingPage';
import CategoryPannel from './Components/Categories';
import Signup from './Components/Signup';
import ThreeFates from './Components/ThreeFates';
import MainPage from './Components/MainPage';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Routes>

      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/categ" element={<CategoryPannel/>}></Route>
      <Route path="/draw" element={<ThreeFates/>}></Route>
      <Route path="/MainPage" element={<MainPage/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>

     </Routes>
     </BrowserRouter>
    
   
     


    </div>
  );
}


export default App;
