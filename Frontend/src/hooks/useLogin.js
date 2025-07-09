import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';
import { api_url } from "../utils/constants";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (email, password) => {
        setLoading(true);

        try {
            const res = await fetch(`${api_url}api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include', // ✅ This is the critical fix!
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Logged In Successfully");
                localStorage.setItem('chat-user', JSON.stringify(data));
                setAuthUser(data);
            } else if (data.error) {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error("Login failed. Please try again.",error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;
