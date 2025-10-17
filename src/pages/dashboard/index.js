import React from "react";

function index() {
  const role = Number(localStorage.getItem("role"));

  return (
    <div>
      <h1>Dashboard</h1>
      {role === 1 && <h2>Welcome, Admin!</h2>}
      {role === 2 && <h2>Welcome, User!</h2>}
    </div>
  );
}

export default index;
