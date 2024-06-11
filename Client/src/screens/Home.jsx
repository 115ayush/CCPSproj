import React from 'react'
import Header from '../Componentes/Header'
import DisplayTask from '../Componentes/DisplayTask'
import Footer from '../Componentes/Footer'
import './Home.css'

export default function Home() {
  return (
    <div>
    <div><Header/></div>
    <div><DisplayTask/></div>
    <div><Footer/></div>
    </div>
  )
}
