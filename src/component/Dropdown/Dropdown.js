import React from "react";
import { Link } from "react-router-dom";
import { serviceDropdown } from '../NavItem/NavItems';
import "./Dropdown.css";

function Dropdown() {
  return (
    <ul className="services-submenu">
      {serviceDropdown.map((item) => (
        <li key={item.id} className={item.cName}>
          <Link to={item.path} className="submenu-item">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
