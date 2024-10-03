import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter > */}
    </AuthContextProvider >
  </StrictMode>
)
