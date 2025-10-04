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
import AcItem from './Components/SingleItem/AcItem'
import BooksItem from './Components/SingleItem/BooksItem'
import ComputerItem from './Components/SingleItem/ComputerItem'
import FurnitureItem from './Components/SingleItem/FurnitureItem'
import KitchenItem from './Components/SingleItem/KitchenItem'
import MenItem from './Components/SingleItem/MenItem'
import WomenItem from './Components/SingleItem/WomenItem'
import SpeakerItem from './Components/SingleItem/SpeakerItem'
import WatchItem from './Components/SingleItem/WatchItem'
import Footer from './Components/Footer/Footer'

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
        <Route path='/acitem/:id' element = {<AcItem />}/>
        <Route path='/bookitem/:id' element={<BooksItem />}/>
        <Route path='/computeritem/:id' element={<ComputerItem />}/>
        <Route path='/furnitureitem/:id' element={<FurnitureItem />}/>
        <Route path='/kitchenitem/:id' element={<KitchenItem />}/>
        <Route path='/menitem/:id' element={<MenItem />}/>
        <Route path='/womenitem/:id' element={<WomenItem />}/>
        <Route path='/speakeritem/:id' element={<SpeakerItem />}/>
        <Route path='/watchitem/:id' element={<WatchItem />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App