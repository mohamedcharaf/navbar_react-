import React from "react";
import { Link } from "react-router-dom";
import { navitems } from '../NavItem/NavItems';
import Button from "../Button/button";
import './Navbar.css'
import Dropdown from "../Dropdown/Dropdown";
const Navbar = () => {
  return (
    <>
<nav className="navbar">
  <Link to="/" className="navbar-logo">
    NATURE
  </Link>
  <ul>
    {navitems.map((item) => (
      <li key={item.id} className={item.cName}>
        <Link to={item.path}>{item.title}</Link>
      </li>
    ))}
  </ul>
  <Button />
</nav>
<Dropdown/>

</>
  );
};

export default Navbar;
