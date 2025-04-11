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
      <div className="mt-8 mx-8 bg-gray-900">
        <button
          onClick={handleExit}
          className="flex items-center gap-2 bg-white text-orange-500 border-2 border-orange-500 rounded-lg px-6 py-2 text-sm font-semibold transition-transform transform hover:scale-105 hover:bg-orange-100 focus:outline-none"
        >
          <PiSignOutBold size={20} /> SIGN OUT
        </button>
      </div>
    </>
  );
}

export default TrendsDownload;
