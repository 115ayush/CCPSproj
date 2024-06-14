import { useContext, useState } from 'react'

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
import About from './Componentes/About';
import usercontext from './Store/Usercontext';
import Sidebar from './Componentes/Sidebar';



function App() {
  const user=useContext(usercontext);
  

 return (
  <usercontext.Provider value={user}>
    <Router>
      <div>

      <Routes>
        
        < Route exact path="/" element={<Login/>} />
        < Route exact path="/responseform" element={<ResponseForm/>} />
        < Route exact path="/login" element={<Home/>} />
        < Route exact path="/about" element={<About/>} />
        < Route exact path="/sidebar" element={<Sidebar/>} />
        
        </Routes>

        </div>
    </Router>
    </usercontext.Provider>
  );
}

export default App
