import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { PiSignInBold } from "react-icons/pi";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
              icon: "success",
              title: "Logged In",
              confirmButtonText: "OK",
            });
      navigate("/dashboard");
    } catch (err) {
        Swal.fire({
            icon: "error", // Error icon
            title: "Invalid Email/Password", // Title of the alert
            text: "Please check your credentials and try again.", // Text description
            background: "#333", // Background color
            color: "#fff", // Text color
            confirmButtonColor: "#3085d6", // Button color
            confirmButtonText: "Okay", // Button text
            timer: 5000, // Auto-close after 5 seconds
          });
        setEmail("");
        setPassword("");
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-gray-800 px-8 py-12 shadow-xl shadow-gray-900 sm:px-10 sm:py-14 md:px-12 md:py-16 w-full max-w-md"
        >
          <h1 className="mb-6 text-center text-3xl font-semibold text-white sm:text-2xl">
            Admin Login
          </h1>
          <div className="mb-4 flex flex-col gap-4">
            <input
              type="email"
              value={email}
              placeholder="Email / Mobile No"
              className="mt-2 w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:ring-2 focus:ring-gray-400 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="mt-2 w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:ring-2 focus:ring-gray-400 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="flex items-center justify-center gap-1 mt-4 w-3/4 rounded-lg border-2 border-white bg-gray-800 p-3 text-sm font-semibold text-white transition-colors delay-300 hover:bg-white hover:text-gray-800">
              SIGN IN
              <PiSignInBold />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
