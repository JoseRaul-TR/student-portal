import React from "react";
import { Link, NavLink } from "react-router-dom";
import Hogwartscrest from "../assets/Hogwartscrest.webp";

export default function Navbar() {

  return (
    <nav className="navbar navbar-light bg-light p-2 py-md-3 px-md-4 container-fluid d-flex align-items-center">
        {/* Layout for small screens (< md) */}
        <div className="d-flex d-md-none justify-content-between w-100 align-items-center">
          <Link
            className="navbar-brand d-flex flex-row justify-content-between align-items-center"
            to="/"
          >
            <img
              src={Hogwartscrest}
              alt="Hogwarts vapensköld"
              style={{ height: "50px" }}
              className="d-inline-block me-1"
            />
            Studentportalen
          </Link>

          {/* Navbar Toggler Button for Mobile (visible below md breakpoint)*/}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Layout for wider screens (> md)*/}
        <div className="d-none d-md-flex w-100 align-items-center">
          <div className="d-flex align-items-center">
          <Link className="navbar-brand m-0 fs-5" to="/">
            Studentportalen
          </Link>
          </div>


          {/* Image in the center of the navbar */}
          <div className="d-flex justify-content-center mx-auto">
            <Link className="navbar-brand m-0" to="/">
              <img
                src={Hogwartscrest}
                alt="Hogwarts vapensköld"
                style={{ height: "100px" }}
                className="d-inline-block"
              />
            </Link>
          </div>

          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3 fs-5">
              <NavLink className="nav-link" to="/courses">
                Kurser
              </NavLink>
            </li>
            <li className="nav-item me-3 fs-5">
              <NavLink className="nav-link" to="/studentblogg">
                Studentblogg
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink className="nav-link" to="/registration">
                Registrering
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Offcanvas Menu for Mobile (visible below md breakpoint)*/}
        <div
          className="offcanvas offcanvas-end bg-light d-md-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
              <Link
                className="navbar-brand d-flex flex-column align-items-center m-0"
                to="/"
              >
                <img
                  src={Hogwartscrest}
                  alt="Hogwarts vapensköld"
                  style={{ height: "50px" }}
                  className="d-inline-block mb-1"
                />
                Studentportalen
              </Link>
            </div>
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
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/courses"
                >
                  Kurser
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/studentblogg"
                >
                  Studentblogg
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/registration"
                >
                  Registrering
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
}
