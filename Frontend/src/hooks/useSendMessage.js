import { useState } from "react"
import toast from "react-hot-toast"
import useConversation from "../zustand/useConversation"

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { selectedConversation, messages, setMessages } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify({message})
            })
            const data=await res.json()
            if(data.error) {
                throw new Error(data.error)
            }
            setMessages([...messages, data.message])
        } catch (error) {
            toast.error(error)
        }
        finally{
            setLoading(false)
        }
    }
    return { sendMessage, loading }
}

export default useSendMessage