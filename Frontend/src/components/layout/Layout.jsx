import React from 'react'
import HeaderA from '../Header/HeaderA'
import { BrowserRouter as Router,Routes,Route } from'react-router-dom'
import Home from '../../pages/home/Home'
import SignUp from '../../pages/signup/SignUp'
import Login from '../../pages/login/Login'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        {/* <Route path="/signup" element={<SignUp/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default Layout