import { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Componentes/header'
import Footer from './Componentes/Footer'
import DisplayTask from './Componentes/DisplayTask'
import './App.css';

function App() {
  

  return (
    <>
      <div>
        <Header></Header>
        <DisplayTask/>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
