import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/sign-in/index";
import Dashboard from "./pages/dashboard/index";
// import Computers from "./components/Computers";
// import Settings from "./components/Settings";
// import Accounts from "./components/Accounts";
// import Audit from "./components/Audit";

// Route protection based on role (admin/user)
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = parseInt(localStorage.getItem("role"), 10); // 1 = admin, 2 = user

  if (!token) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Admin routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={[1, 2]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/computers"
          element={
            <ProtectedRoute allowedRoles={[1, 2]}>
              <Computers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute allowedRoles={[1, 2]}>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/accounts"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <Accounts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/audit"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <Audit />
            </ProtectedRoute>
          }
        /> */}

        {/* Unauthorized access page */}
        <Route path="/unauthorized" element={<h2>Unauthorized Access</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
