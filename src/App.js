import "../src/App.css";
import Brands from "./brands";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Tire from "./tire";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alltires from "./components/alltires";
import FormCart from "./components/FormCart";
import Brand from "./components/brand";





function App() {
  return (
    <div className="App">
        <Hero/>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/brands" element={<Brands/>}/>
          </Routes>
        </BrowserRouter>
        <Alltires/>
        
        <Tire/>
        <FormCart/>
        <Brand/>

        


    </div>
  );
}

export default App;
