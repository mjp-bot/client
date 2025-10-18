import React from "react";
import "./index.css";

function Index() {
  const role = Number(localStorage.getItem("role"));

  return (
    // <div>
    //   <h1>Dashboard</h1>
    //   {/* {role === 1 && <h2>Welcome, Admin!</h2>}
    //   {role === 2 && <h2>Welcome, User!</h2>} */}
    // </div>

    <div className="computers">Computers</div>
  );
}

export default Index;
