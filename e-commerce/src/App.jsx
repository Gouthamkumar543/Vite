import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import "./App.css"
import Men from './Components/SubPages/Men'
import Women from './Components/SubPages/Women'
import Furniture from './Components/SubPages/Furniture'
import Books from './Components/SubPages/Books'
import Kitchen from './Components/SubPages/Kitchen'
import Speakers from './Components/SubPages/Speakers'
import Watch from './Components/SubPages/Watch'
import Computer from './Components/SubPages/Computer'
import Ac from './Components/SubPages/Ac'

const App = () => {
  return (
    <div>
      <LandingPage />
      <Men />
      <Women />
      <Furniture />
      <Books />
      <Kitchen />
      <Furniture />
      <Books />
      <Kitchen />
      <Speakers />
      <Watch />
      <Computer />
      <Ac />
    </div>
  )
}

export default App