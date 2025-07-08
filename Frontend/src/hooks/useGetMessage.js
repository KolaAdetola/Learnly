import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import useConversation from "../zustand/useConversation"
import { api_url } from "../utils/constants"

const useGetMessage = () => {
  const [loading,setLoading]=useState(false)
  const {messages,setMessages,selectedConversation} = useConversation()

  useEffect(()=>{
    const getMessages = async () =>{
      setLoading(true)
      try {
        const res = await fetch(`${api_url}api/messages/${selectedConversation._id}`)
        const data = await res.json()
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