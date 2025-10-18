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
import Computer from "./pages/computer/index";
import Settings from "./pages/settings/index";
import Accounts from "./pages/accounts/index";
import Audit from "./pages/audit/index";
import ShowSidebar from "./pages/sign-in/ShowSidebar";
import SidePanel from "./pages/navigation/index";
import ProtectedRoute from "./pages/sign-in/ProctedRoute";

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   if (!token) return <Navigate to="/" />;
//   return children;
// };

function App() {
  return (
    // <AuthProvider>
    <Router>
      <ShowSidebar>
        <SidePanel />
      </ShowSidebar>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={[1, 2]}>
              <Dashboard />
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
          path="/computers"
          element={
            <ProtectedRoute allowedRoles={[1, 2]}>
              <Computer />
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
        />

        {/* Example future routes
        <Route
          path="/computers"
          element={
            <ProtectedRoute allowedRoles={[1, 2]}>
              <Layout><Computers /></Layout>
            </ProtectedRoute>
          }
        />

       
        <Route
          path="/accounts"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <Layout><Accounts /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/audit"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <Layout><Audit /></Layout>
            </ProtectedRoute>
          }
        /> */}

        <Route path="/unauthorized" element={<h2>Unauthorized Access</h2>} />
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;
