import React from "react";
import { PiSignOutBold } from "react-icons/pi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function TrendsDownload() {
  const navigate = useNavigate();

  async function handleExit() {
    try {
      await signOut(auth);
      Swal.fire({
        icon: "success",
        title: "Logged out successfully!",
        confirmButtonText: "OK",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
       <div className="w-screen h-screen bg-gray-900 p-4">
        <button
          onClick={handleExit}
          className="flex items-center justify-center gap-1 w-36 rounded-lg border-2 border-white bg-gray-800 p-3 text-sm font-semibold text-white transition-colors delay-300 hover:bg-white hover:text-gray-800"
        >
          <PiSignOutBold size={20} /> SIGN OUT
        </button>
      </div>
    </>
  );
}

export default TrendsDownload;
