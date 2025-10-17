import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const Index = () => {
  const role = parseInt(localStorage.getItem("role"), 10);
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", roles: [1, 2] },
    { path: "/computers", label: "Computers", roles: [1, 2] },
    { path: "/settings", label: "Settings", roles: [1, 2] },
    { path: "/accounts", label: "Accounts", roles: [1] },
    { path: "/audit", label: "Audit Logs", roles: [1] },
  ];

  return (
    <div className="sidepanel">
      <h2 className="sidepanel-title">Device Lifecycle</h2>
      <ul className="sidepanel-menu">
        {menuItems
          .filter((item) => item.roles.includes(role))
          .map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Index;
