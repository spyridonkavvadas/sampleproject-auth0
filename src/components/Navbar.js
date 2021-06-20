import React from "react";

//import MainNav from "./Mainnav";
import AuthNav from "./AuthNav";

const Navbar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
         
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;