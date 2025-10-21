import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const Index = () => {
  const role = parseInt(localStorage.getItem("role"), 10);
  const user_name = localStorage.getItem("user_name");
  const username = localStorage.getItem("username");
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("user_name");
    window.location.href = "/";
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", roles: [1, 2] },
    { path: "/computers", label: "Computers", roles: [1, 2] },
    { path: "/settings", label: "Settings", roles: [1, 2] },
    { path: "/accounts", label: "Accounts", roles: [1] },
    { path: "/audit", label: "Audit Logs", roles: [1] },
  ];

  return (
    <div className="navigation">
      <div className="topbar">
        <img
          src="../assets/brand/Delsan Logo with ISO.png"
          alt="Delsan Logo"
          className="img"
        />

        {/* Account Icon + Dropdown */}
        <div className="account-section">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="account-icon"
            onClick={toggleDropdown}
          />

          {dropdownOpen && (
            <div className="account-dropdown">
              <p className="account-user_name">{user_name}</p>
              <p className="account-username">{username}</p>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="sidepanel">
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
    </div>
  );
};

export default Index;
