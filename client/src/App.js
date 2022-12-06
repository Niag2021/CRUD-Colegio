import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar.js";
import AlumnosPage from "./components/AlumnosPage.js";
import AlumnosForm from "./components/AlumnosForm.js";
import AlumnosNotFound from "./components/AlumnosNotFound.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>         
          <Routes>
            <Route path="/" element={<AlumnosPage/>}/>
            <Route path="/new" element={<AlumnosForm/>}/>
            <Route path="*" element={<AlumnosNotFound/>}/>
          </Routes>        
        </BrowserRouter>        
    </div>
  )
}

export default App