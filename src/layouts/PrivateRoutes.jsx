import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function PrivateRoutes() {
  const location = useLocation();

  return auth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}

export default PrivateRoutes;
