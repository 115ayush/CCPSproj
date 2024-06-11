import { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ResponseForm from './Componentes/ResponseForm'
import { 
  BrowserRouter as Router ,
   Routes, 
   Route
   
   } from "react-router-dom";
   import Home from './screens/Home';
import Header from './Componentes/Header';
import Login from './Componentes/Login';
import SignUp from './Componentes/SignUp';

function App() {
  

 return (
    <Router>
      <div>

      <Routes>
        < Route exact path="/" element={<Home/>} />
        < Route exact path="/responseform" element={<ResponseForm/>} />
        < Route exact path="/header" element={<Header/>} />
        < Route exact path="/login" element={<Login/>} />
        < Route exact path="/signup" element={<SignUp/>} />
        </Routes>

        </div>
    </Router>
  );
}

export default App
