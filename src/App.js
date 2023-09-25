import "./App.css";
import "./Utilities.css";
import Brands from "./brands";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Tire from "./tire";
import FormCart from "./components/FormCart";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import Brand from "./components/brand";
import About from "./components/about";
import Promo from "./components/promo";
import React from "react";
import ProvinceList from "./ProvinceList";
import Database from "./database";



>>>>>>> 1206a283f1148e9314c5f6da1c6d8c0ef5d3fc9c


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={ <Hero/> }/>
            <Route path="/brands" element={ <Brands/> }/>
            <Route path="/tires" element={ <Tire/> }/>
            <Route path="/form-cart" element={ <FormCart/> }/>
          </Routes>
        </BrowserRouter>
<<<<<<< HEAD
=======
        <Alltires/>
   
        
        <Tire/>

        <Promo/>
        <About/>

        <ProvinceList />
        <Database/>
      


>>>>>>> 1206a283f1148e9314c5f6da1c6d8c0ef5d3fc9c
    </div>
  );
}

export default App;
