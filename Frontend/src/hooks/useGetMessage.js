import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetMessage = () => {
  const [loading,setLoading]=useState(false)
  const {messages,setMessages,selectedConversation} = useConversation()

  useEffect(()=>{
    const getMessages = async () =>{
      setLoading(true)
      try {
        const res = await fetch(`https://your-api-url/conversations/${selectedConversation.id}/messages`)
        const data = await response.json()
        if(!res.ok){
          throw new Error(data.message)
        }
        setMessages(data)
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false)
      }

    }
    if(selectedConversation?._id){
      getMessages()
    }
  },[selectedConversation?._id,setMessages])

  return {messages,loading}
}

export default useGetMessage