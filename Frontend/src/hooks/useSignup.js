import { useState } from "react";
import toast from "react-hot-toast";
// import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	// const { setAuthUser } = useAuthContext();

	const signup = async ({ fullName, username, password, confirmPassword, member }) => {
		const success = handleInputErrors({ fullName, username, password, confirmPassword, member });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmPassword, member }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			// setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, member }) {
	if (!fullName || !username || !password || !confirmPassword || !member) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}


















































// import React, { useState } from "react";
// const notify = () => toast("fill all fields");
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const useSignup = () => {
//   const [loading, setloading] = useState(false);

//   const signup = async ({
//     firstName,
//     email,
//     password,
//     confirmPassword,
//     member,
//   }) => {
//     const success = handleInputErrors({
//       firstName,
//       email,
//       password,
//       confirmPassword,
//       member,
//     });
//     if (!success) return;
//     setloading(true);
//     try {
//       const res=await fetch("http://localhost:2500/api/auth/signup",{
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName,
//           email,
//           password,
//           confirmPassword,
//           member,
//         }),
//       });
//       const data=await res.json()
//       if (data.success) {
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//       console.log(data);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setloading(false);
//     }
//   };
//   return { signup, loading };
// };

// export default useSignup;

// function handleInputErrors({
//   firstName,
//   email,
//   password,
//   confirmPassword,
//   member,
// }) {
//   if (!firstName || !email || !password || !confirmPassword || !member) {
//     toast.error("All fields are required");
//     return false;
//   }

//   if (password !== confirmPassword) {
//     toast.error("Passwords do not match");
//     return false;
//   }

//   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     toast.error("Invalid email address");
//     return false;
//   }

//   if (password.length < 6) {
//     toast.error("Password must be at least 6 characters long");
//     return false;
//   }

//   notify();
//   return true;
// }