
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";

import Register from "./components/Register";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultPage/>} />
        <Route path="/about" element={<h1>this is about us page</h1>} />
        <Route path = "/register" element={<Register/>} />
        
      </Routes>
    </>
  );
}

export default App;