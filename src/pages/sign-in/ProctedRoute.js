import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = parseInt(localStorage.getItem("role"), 10);

  // 🔒 If there's no token, redirect to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // 🔒 Optional role-based restriction
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  // ✅ Otherwise, show the page
  return children;
};

export default ProtectedRoute;
