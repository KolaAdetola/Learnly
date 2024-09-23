import React from 'react'
import HeaderA from '../Header/HeaderA'
import { BrowserRouter as Router,Routes,Route } from'react-router-dom'
import Home from '../../pages/home/Home'
import SignUp from '../../pages/signup/SignUp'
import Login from '../../pages/login/Login'
import Header from '../Header/Header'
import Chat from '../Chat'
import Exam from '../../pages/Exams/Exam'

const Layout = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/exams" element={<Exam/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default Layout