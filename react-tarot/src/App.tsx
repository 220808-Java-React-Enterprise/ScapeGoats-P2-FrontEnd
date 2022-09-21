import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PrivateRoutes from './Utils/Routes/PrivateRoutes';

import Header from './Components/Header';
import Button from './Components/Button';


import { LandingPage } from './Components/LandingPage';
import CategoryPannel from './Components/Categories';
import Signup from './Components/Signup';
import ThreeFates from './Components/ThreeFates';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import ReadingHistory from './Components/ReadingHistory';

function App() {

  return (
    
      <div>
     <BrowserRouter>
     <Routes>

     <Route element={<PrivateRoutes/>}>
        <Route path="/MainPage" element={<MainPage/>}></Route>
      </Route>

     <Route path="/Categ" element={<CategoryPannel/>}></Route>
      <Route path="/Draw" element={<ThreeFates/>}></Route>
      
      <Route path="/ReadingHistory" element={<ReadingHistory/>}></Route>

     
          
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>

     </Routes>
     </BrowserRouter>
    
   
     
     </div>

   
  );
}


export default App;
