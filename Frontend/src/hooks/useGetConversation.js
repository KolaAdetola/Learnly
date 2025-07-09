import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { api_url } from "../utils/constants";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${api_url}api/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include', // 🔥 MUST include this
  body: JSON.stringify({ email, password }),
});

                if (!res.ok) throw new Error('Failed to fetch conversations');

                const data = await res.json();
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getConversations();
    }, []);

    return { loading, conversations };
};

export default useGetConversations;
