import './App.css'
import Chat from './components/Chat'
import Message from './components/Message/Message'
import MessageContainer from './components/Message/MessageContainer'
import Sendbar from './components/SendBar/Sendbar'
import { RxHamburgerMenu } from "react-icons/rx";
import Search from './components/sidebar/Search'
import Sidebar from './components/sidebar/Sidebar'
import StudentList from './components/sidebar/StudentList'
import { CiChat2 } from "react-icons/ci";
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import Header from './components/Header/Header'
import { BrowserRouter as Router,Routes,Route } from'react-router-dom'
import HeaderA from './components/Header/HeaderA'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
    <Layout/>
    {/* <Header/> */}
    {/* <Home/> */}
    {/* <div className="w-full h-[91.5vh] bg-white grid grid-cols-[320px_2px_1fr] gap-4  px-4 py-3">
      <Sidebar/>      
      <div className="w-[2px] h-[89vh] bg-gray-200 "></div>
      <MessageContainer/>
    </div> */}
    
    {/* <Login/>
    <SignUp/>
    <Chat/> */}
    </>
  )
}

export default App
