import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowSidebars = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(() => location.pathname !== "/");

  useEffect(() => {
    setShowNavBar(location.pathname !== "/");
  }, [location.pathname]); // Only depend on `pathname`

  return <>{showNavBar && children}</>;
};

export default ShowSidebars;
