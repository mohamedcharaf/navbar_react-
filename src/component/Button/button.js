import React from "react";
import { Link } from "react-router-dom";
import './button.css';

function Button() {
  return (
    <Link to="signup">
      <button className="btn">Sign Up</button>
    </Link>
  );
}

export default Button;
