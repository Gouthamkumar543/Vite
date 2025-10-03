import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import MenPage from './Components/IndividualProduct/MenPage'
import NavBar from './Components/SubPages/NavBar'
import AcPage from './Components/IndividualProduct/AcPage'
import BooksPage from './Components/IndividualProduct/BooksPage'
import FurniturePage from './Components/IndividualProduct/FurniturePage'
import Kitchenpage from './Components/IndividualProduct/Kitchenpage'
import WatchPage from './Components/IndividualProduct/WatchPage'
import Womenpage from './Components/IndividualProduct/Womenpage'
import ComputerPage from './Components/IndividualProduct/ComputerPage'
import SpeakerPage from './Components/IndividualProduct/SpeakerPage'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/menpage' element={<MenPage />}/>
        <Route path='/acpage' element = {<AcPage />}/>
        <Route path='/bookspage' element = {<BooksPage />}/>
        <Route path='/furniturepage' element = {<FurniturePage />}/>
        <Route path='/kitchenpage' element = {<Kitchenpage />}/>
        <Route path='/speakerpage' element = {<SpeakerPage />}/>
        <Route path='/watchpage' element = {<WatchPage />}/>
        <Route path='/womenpage' element = {<Womenpage />}/>
        <Route path='/computerpage' element = {<ComputerPage />}/>
      </Routes>
    </div>
  )
}

export default App