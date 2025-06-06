import React from "react";
import { NavLink } from "react-router-dom";

import navLinks from "../data/navLinks";

function NavItems({
  flexDirection = "row",
  itemClasses = "",
  linkClasses = "",
}) {
  const ulClasses =
    flexDirection === "row"
      ? "navbar-nav flex-row"
      : "navbar-nav justify-content-center align-items-center flex-grow-1 pe-3";

  return (
    <ul className={ulClasses}>
      {navLinks.map((link) => (
        <li className={`nav-item ${itemClasses}`} key={link.path}>
          <NavLink className={`nav-link ${linkClasses}`} to={link.path}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
