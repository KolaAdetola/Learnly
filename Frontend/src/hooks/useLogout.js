import React, { useState } from 'react'

const useLogout = () => {
    const [loading,setloading]=useState(false)

    const logout = async () => {
        try {
            const res= await fetch("api/auth/logout",{
                method:"POST",
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem('token')}`,
                },
            })
            const data=await res.json()
            if(data.success){
                localStorage.removeItem('token')
                window.location.href="/"
            }
            if(data.error){
                alert(data.error)
            }
            
        } catch (error) {
            
        }
        finally{
            setloading(false)
        }
    }
}

export default useLogout