import React from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './stores/Pages/LandingPage';

import NonvegbiryaniPage from './stores/Pages/NonvegbiryaniPage';
import NonvegsoupsPage from './stores/Pages/NonvegsoupsPage';
import NonvegstartersPage from './stores/Pages/NonvegstartersPage';
import ParotasPage from './stores/Pages/ParotasPage';
import PulkasPage from './stores/Pages/PulkasPage';
import VegbiryaniPage from './stores/Pages/VegbiryaniPage';
import VegsoupsPage from './stores/Pages/VegsoupsPage';
import VegstartersPage from './stores/Pages/VegstartersPage';
import NonvegbiryaniSingle from './Singles/NonvegbiryaniSingle';
import NonvegsoupsSingle from './Singles/NonvegsoupsSingle';
import NonvegstartersSingle from './Singles/NonvegstartersSingle';
import ParotasSingle from './Singles/ParotasSingle';
import PulkasSingle from './Singles/PulkasSingle';
import VegbiryaniSingle from './Singles/VegbiryaniSingle';
import VegsoupsSingle from './Singles/VegsoupsSingle';
import VegstartersSingle from './Singles/VegstartersSingle';
import UserCart from './stores/UserCart';
import Register from './stores/Register';
import Login from './stores/Login';
import Logout from './stores/Logout';


const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<LandingPage/>}></Route>
        <Route path='/' element={ <Login/>}/>
        <Route path='/logout' element={<Logout/>}></Route>

        <Route path='/nonvegbiryani' element={<NonvegbiryaniPage/>}/>
        <Route path='/nonvegsoups' element={<NonvegsoupsPage/>}/>
        <Route path='/nonvegstarters' element={<NonvegstartersPage/>}/>
        <Route path='/parotas' element={<ParotasPage/>}/>
        <Route path='/pulkas' element={<PulkasPage/>}/>
        <Route path='/vegbiryani' element={<VegbiryaniPage/>}/>
        <Route path='/vegsoups' element={<VegsoupsPage/>}/>
        <Route path='/vegstarters' element={<VegstartersPage/>}/>
        <Route path='/nonvegbiryani/:id' element={<NonvegbiryaniSingle/>} />
        <Route path='/nonvegsoups/:id' element={<NonvegsoupsSingle/>}/>
        <Route path='/nonvegstarters/:id' element={<NonvegstartersSingle/>}/>
        <Route path='/parotas/:id' element={<ParotasSingle/>}/>
        <Route path='/pulkas/:id' element={<PulkasSingle/>}/>
        <Route path='/vegbiryani/:id' element={<VegbiryaniSingle/>}/>
        <Route path='/vegsoups/:id' element={<VegsoupsSingle/>}/>
        <Route path='/vegstarters/:id' element={<VegstartersSingle/>}/>
         <Route path='/cart' element={<UserCart/>}/>
      </Routes>
      
    </div>
  )
}

export default App