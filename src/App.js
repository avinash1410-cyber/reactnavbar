import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Navbar } from './components/navbar.js';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <>

<h1>Welcome In the Avinash Kumar Website</h1>  

<Navbar/>
<Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        </Routes>
</Router>
    </>
  );
}

export default App;
