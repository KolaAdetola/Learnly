import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { api_url } from "../utils/constants";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    email,
    password,
    confirmPassword,
    member,
  }) => {
    const success = handleInputErrors({
      fullName,
      email,
      password,
      confirmPassword,
      member,
    });
    if (!success) return;

    setLoading(true);
    
    try {
      const res = await axios.post(
        `${api_url}api/auth/signup`,
        { fullName, email, password, confirmPassword, member },
        {
          withCredentials: true, // ✅ critical for receiving the cookie
        }
      );

      const data = res.data;

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
