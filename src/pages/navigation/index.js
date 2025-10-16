import React, { useState, useEffect } from "react";
import {
  faChevronDown,
  faArrowRightFromBracket,
  faChartLine,
  faCircleChevronDown,
  faBox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../sign-in/AuthContext"; // <-- adjust this path!
import "./index.css";

const OPEN_SUBMENU_KEY = "navigation_openSubmenu";

function Navigation() {
  const [openSubmenu, setOpenSubmenu] = useState(
    localStorage.getItem(OPEN_SUBMENU_KEY)
      ? parseInt(localStorage.getItem(OPEN_SUBMENU_KEY), 10)
      : null
  );

  useEffect(() => {
    if (openSubmenu !== null) {
      localStorage.setItem(OPEN_SUBMENU_KEY, openSubmenu);
    } else {
      localStorage.removeItem(OPEN_SUBMENU_KEY);
    }
  }, [openSubmenu]);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    { text: "Dashboard", path: "/dashboard", icon: faChartLine },
    {
      text: "Inventory",
      icon: faBox,
      submenu: [
        { text: "Computers", path: "/computer" },
        { text: "Furniture", path: "/furniture" },
        { text: "Vehicles", path: "/vehicle" },
        { text: "Machinery", path: "/machinery" },
      ],
    },
    { text: "Account", path: "/register-user", icon: faUser },
    { text: "Add Dropdowns", path: "/dropdowns", icon: faCircleChevronDown },
  ];

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div className="sidePanel">
        <div className="sidePanelHeader">
          <img src="/DelsanLogo/DOSC logo.png" alt="Logo" />
        </div>

        <div className="sideDiv">
          <div className="nav">
            <ul>
              {menuItems.map((item, index) => (
                <li key={item.text} className="mainMenu">
                  {item.submenu ? (
                    <button
                      className="sto-btn"
                      onClick={() => toggleSubmenu(index)}
                    >
                      <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                      {item.text}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="faChevronDown"
                      />
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `menu-link ${isActive ? "active" : ""}`
                      }
                    >
                      <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                      {item.text}
                    </NavLink>
                  )}

                  {openSubmenu === index && item.submenu && (
                    <ul className="submenu">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.text}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              `submenu-link ${isActive ? "active" : ""}`
                            }
                          >
                            {subItem.text}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="logoutButtonDiv" onClick={handleLogout}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="logoutIcon"
            />
            Logout
          </div>
        </div>
      </div>

      <div className="footer">
        <h1>Copyright © 2024 MJP</h1>
        <span>Version 2024.12.20</span>
      </div>
    </div>
  );
}

export default Navigation;
