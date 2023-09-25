import "./App.css";
import "./Utilities.css";
import Brands from "./brands";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Tire from "./tire";
import FormCart from "./components/FormCart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Slctprovince from "./components/installation";
import About from "./components/about";
// import ProvinceList from "./ProvinceList";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={ <Hero/> }/>
            <Route path="/#aboutUs" element={ <About/> }/>
            <Route path="/brands" element={ <Brands/> }/>
            <Route path="/tires" element={ <Tire/> }/>
            <Route path="/installationSite" element={ <Slctprovince/> }/>
            <Route path="/form-cart" element={ <FormCart/> }/>
          </Routes>
        <About/>
        </BrowserRouter>
    </div>
  );
}

export default App;
