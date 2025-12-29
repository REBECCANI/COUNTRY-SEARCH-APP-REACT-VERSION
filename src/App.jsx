import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CountryDetails from "./pages/CountryDetails";

function App(){

  return(
    <>
      <Navbar />   
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/country/:name" element={<CountryDetails/>} />
      </Routes> 
    </>
    
  );
}

export default App;