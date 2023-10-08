import React from "react";
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from './components/Login/Login';
import Programs from "./components/Programs/Programs";

function App() {
  return (
    <>
<Router>
  <Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/products" element={<Products/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/programs" element={<Programs/>}/>
</Routes>
</Router>
    </>
  );
}

export default App;
