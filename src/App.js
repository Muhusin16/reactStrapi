import React from 'react';
import Ecommers from "./Ecommerce/Ecommers";
import Navbar from './Components/Navbar/Navbar';
import WebProduct from './Components/WebProduct/WebProduct';
import {Routes, Route,BrowserRouter } from 'react-router-dom';
import MobileApp from './Components/MobileApp/MobileApp';
import CloudSolutions from './Components/CloudSolution/CloudSolutions';

const App = () => {
  return (
    
      <BrowserRouter>
              <Navbar />
              <Routes>
                <Route index element={<MobileApp/>} />
                <Route path="/Ecommerce" element={<Ecommers/>} />
                <Route path="/WebProduct" element={<WebProduct/>} />
                <Route path="/MobileApp" element={<MobileApp/>} />
                <Route path="/CloudSolutions" element={<CloudSolutions/>} />
              </Routes> 
      </BrowserRouter>

  );
};

export default App;
