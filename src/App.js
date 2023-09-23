import "./App.css";
import "./Utilities.css";
import Brands from "./brands";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Tire from "./tire";
import FormCart from "./components/FormCart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
    </div>
  );
}

export default App;
