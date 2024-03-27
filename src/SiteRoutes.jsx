import React from 'react'
import Gallery from './pages/Gallery'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Mosque from './pages/Mosque'
import Wifi from './pages/Wifi'



function SiteRoutes() {
  return (
   <>
    <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/wifi' element={<Wifi/>}/>
          <Route path='/' element={<PageNotFound/>}/>
          <Route path='/mosque' element={<Mosque/>}/>
        </Routes>
   </>
  )
}

export default SiteRoutes