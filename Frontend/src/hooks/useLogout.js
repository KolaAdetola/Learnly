import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { api_url } from '../utils/constants'

const useLogout = () => {
    const [loading,setloading]=useState(false)
    const {setAuthUser}=useAuthContext()

    const logout = async () => {
        try {
            const res= await fetch(`${api_url}api/auth/logout`,{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                    // 'Authorization':`Bearer ${localStorage.getItem('token')}`,
                },
            })
            const data=await res.json()
            if(data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem('chat-user')
            setAuthUser(null)
            
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setloading(false)
        }
    }
    return { loading, logout }
}

export default useLogout