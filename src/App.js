import React from 'react';
import Ecommers from "./Ecommerce/Ecommers";
import Navbar from './Components/Navbar/Navbar';
import WebProduct from './Components/WebProduct/WebProduct';
import {Routes, Route,BrowserRouter } from 'react-router-dom';
import MobileApp from './Components/MobileApp/MobileApp';
import CloudSolutions from './Components/CloudSolution/CloudSolutions';
import About from './Components/About/About';
import Design from './Components/Designs/Designs';
import Labs from './Components/Lab/Labs';
import MobileHybrid from './Components/MobileHybrid-Development/MobileHybrid';
// import Home from './Components/Ecommers/Home';






const App = () => {
  return (
    
      <BrowserRouter>
              <Navbar />
              <Routes>
                <Route index element={<About/>} />
                <Route path="/Ecommerce" element={<Ecommers/>} />
                <Route path="/WebProduct" element={<WebProduct/>} />
                <Route path="/MobileApp" element={<MobileApp/>} />
                <Route path="/CloudSolutions" element={<CloudSolutions/>} />
                <Route path="/About" element={<About/>} />
                {/* <Route path="/Home" element={<Home/>} /> */}
                <Route path="/Design" element={<Design/>} />
                <Route path="/Labs" element={<Labs/>} />
                <Route path="/MobileHybrid" element={<MobileHybrid/>} />
              </Routes> 
      </BrowserRouter>
      

  );
};

export default App;
