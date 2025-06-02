import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light p-4 fixed-top">

      <div className="container-fluid d-flex justify-content-between align-items-center">

        <Link className="navbar-brand" to="/">
          Student Portal
        </Link>

        {/* Navbar Toggler Button for Mobile (visible below md breakpoint)*/}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="offcanvas" // Tells Bootstrap to trigger an offcanvas
          data-bs-target="#offcanvasNavbar" // Points to the ID of the offcanvas element
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Horizontal Navigation for Desktop (visible from md breakpoint and up)*/}
        <ul className="navbar-nav flex-row d-none d-md-flex ms-auto">
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/kurser">
              Kurser
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/nyheter">
              Nyheter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/registrering">
              Registrering
            </NavLink>
          </li>
        </ul>

        {/* Offcanvas Menu for Mobile (visible below md breakpoint)*/}
        <div
          className="offcanvas offcanvas-end bg-light d-md-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Meny
            </h5>
            {/* Close button for the offcanvas menu */}
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            {/* Navigation links inside the offcanvas.*/}
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Hem
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kurser">
                  Kurser
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nyheter">
                  Nyheter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/registrering">
                  Registrering
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}