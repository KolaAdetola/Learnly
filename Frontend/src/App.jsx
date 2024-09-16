import './App.css'
import Chat from './components/Chat'
import Message from './components/Message/Message'
import Sendbar from './components/SendBar/Sendbar'
import Search from './components/sidebar/Search'
import Sidebar from './components/sidebar/Sidebar'
import StudentList from './components/sidebar/StudentList'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

function App() {
  return (
    <>
    <div className="bg-white flex items-center justify-between whitespace-nowrap border-b  w-full h-14 px-10 py-3">
      <div className="flex items-center gap-4 text-[#141414]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
        </div>
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Learnly</h2>
      </div>
    </div>
    <div className="w-full h-[91.5vh] bg-white grid grid-cols-[320px_2px_1fr] gap-4  px-4 py-3">
      <Sidebar/>      
      <div className="w-[2px] h-[89vh] bg-gray-200 "></div>
    </div>
    
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <Chat/> */}
    </>
  )
}

export default App
