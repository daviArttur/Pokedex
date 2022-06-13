import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Pokedex from './components/home/pokedex/Pokedex'
import Home from './components/home/Home'
// Styles
import './App.scss'


const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/pokemons/*' element={<Pokedex />} />
    </Routes >
  )
}

export default App