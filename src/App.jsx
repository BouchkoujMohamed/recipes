import React, { useContext } from 'react'

import Navbar from './components/Navbar'
import { Routes , Route} from "react-router-dom";
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import About from './pages/About'
import TermsOfUse from './pages/TermsOfUse'
import DMCA from './pages/DMCA'
import ContactUs from './pages/Contac'
import RecipesDetails from './pages/RecipesDetails'
import Footer from './components/Footer'


function App() {
  return (
    <div >
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Privacy-Policy" element={<PrivacyPolicy/>}/> 
          <Route path="/About-Us" element={<About/>}/> 
          <Route path="/Terms-Of-Use" element={<TermsOfUse/>}/> 
          <Route path="/DMCA" element={<DMCA/>}/> 
          <Route path="/Contact-Us" element={<ContactUs/>}/> 
          <Route path="/:httpsi" element={<RecipesDetails/>}/> 
        </Routes>
      </div>
      <Footer/>
    </div>
    
  )
}

export default App
