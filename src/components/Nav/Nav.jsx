import React from "react";
import { Link } from "react-router-dom";
function Nav(){
  return <nav>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/students">Students</Link>
  </nav>  
}

export default Nav