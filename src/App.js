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
import SidePanel from "./pages/navigation/index";
// import Computers, Settings, Accounts, Audit once ready

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const token = localStorage.getItem("token");
//   const role = parseInt(localStorage.getItem("role"), 10);

//   if (!token) return <Navigate to="/" />;
//   if (allowedRoles && !allowedRoles.includes(role))
//     return <Navigate to="/unauthorized" />;

//   return children;
// };

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" />;
  return children;
};

// Layout wrapper that includes sidebar
const Layout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <SidePanel />
    <div style={{ marginLeft: "240px", width: "100%", padding: "20px" }}>
      {children}
    </div>
  </div>
);

function App() {
  return (
    <Router>
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
  );
}

export default App;
