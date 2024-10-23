import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Remplace Switch par Routes
import Navbar from "./component/Navbar/Navbar"; // Assure-toi que ce chemin est correct
import Services from "./component/serivces/service";
import Product from "./pages/produit/produit";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> {/* Remplace Switch par Routes */}
      <Route path= "/" element={<h1>hme</h1>} />
        <Route path= "/services" element={<Services/>} />
        <Route path= "/products" element={<Product/>} />
        <Route path= "/services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
