import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/home/Home';
import SignUp from '../../pages/signup/SignUp';
import Login from '../../pages/login/Login';
import Chat from '../Chat';
import Exam from '../../pages/Exams/Exam';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';
import PreExams from '../../pages/preExams/PreExams';
import Profile from '../../pages/Profile/Profile';
import StudentExam from '../../pages/Exams/StudentExam';
import Test from '../../pages/Exams/Test';

const Layout = () => {
  const { authUser } = useAuthContext(); // Get auth state

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Home Route: Only accessible if user is authenticated */}
          <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />

          {/* SignUp Route: Redirect to Home if user is authenticated */}
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />

          {/* Chat Route: Protect this route as well */}
          <Route path="/chat" element={authUser ? <Chat /> : <Navigate to="/login" />} />

          {/* Login Route: Redirect to Home if user is already logged in */}
          <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />

          {/* Exams Route: Protect this route */}
          <Route path="/exams" element={authUser ? <StudentExam /> : <Navigate to="/login" />} />

          {/* Pre-Exams Route: Protect this route */}
          <Route path="/pre-exams" element={authUser ? <PreExams /> : <Navigate to="/login" />} />

          {/* Pre-Exams Route: Protect this route */}
          <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />

          <Route path="/teacher/exams" element={authUser ? <Test /> : <Navigate to="/login" />} />

          {/* Pre-Exams Route: Protect this route */}
          {/* <Route path="/settings" element={authUser ? <PreExams /> : <Navigate to="/login" />} /> */}
          

        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default Layout;
