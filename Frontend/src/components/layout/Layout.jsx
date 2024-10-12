import React from 'react'
import HeaderA from '../Header/HeaderA'
import { BrowserRouter as Router,Routes,Route, Navigate } from'react-router-dom'
import Home from '../../pages/home/Home'
import SignUp from '../../pages/signup/SignUp'
import Login from '../../pages/login/Login'
import Header from '../Header/Header'
import Chat from '../Chat'
import Exam from '../../pages/Exams/Exam'
import toast, { Toaster } from 'react-hot-toast'
import { useAuthContext } from '../../context/AuthContext'
import PreExams from '../../pages/preExams/PreExams'

const Layout = () => {
  const {authUser}=useAuthContext()
  console.log(authUser);
  return (
    
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={authUser?<Home/>:<Navigate to="/login"/>}/>
        <Route path="/signup" element={authUser?<Navigate to="/"/>:<SignUp/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/login" element={authUser?<Navigate to="/"/>:<Login/>}/>
        <Route path="/exams" element={<Exam/>}/>
        <Route path="/pre-exams" element={<PreExams/>}/>
      </Routes>
      <Toaster/>
    </Router>
    </>
  )
}

export default Layout