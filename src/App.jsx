
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Users/pages/Home'
import Auth from './pages/Auth'
import PagenotFound from './pages/PagenotFound'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import Allbooks from './Users/pages/Allbooks'
import Careers from './Users/pages/Careers'
import Contacts from './Users/pages/Contacts'
import Profile from './Users/pages/Profile'
function App() {
 const [isLoading , setIsLoading] = useState(false)

 useEffect(()=>{
   setTimeout(()=>{
     setIsLoading(true)
   },7200)
 },[])
  return (
    <>
    <Routes>
      <Route path='/' element={isLoading?<Home/>:<Preloader/>}/>
      <Route path='/login' element={<Auth />}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/allbooks' element={<Allbooks/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/*' element={<PagenotFound/>}/>



    </Routes>


    </>
  )
}

export default App
