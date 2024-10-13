import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
    const [loading,setLoading] = useState(false)   
    const {setAuthUser} = useAuthContext()

    const login =async (email, password) => {
        try {
            const res= await fetch("api/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password})
            })
            const data= await res.json()
            if(res.ok){
                toast.success("Logged In Successfully")
            }
            if(data.error){
                toast.error(data.error)
            }

            localStorage.setItem('chat-user', JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }
    return { loading, login }
}

export default useLogin