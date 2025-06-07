import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark p-2 py-md-3 px-md-4 container-fluid d-flex align-items-center">
      {/* Layout for small screens (< md) */}
      <div className="d-flex d-md-none justify-content-between w-100 align-items-center">
        {/* Using BrandLogo component for mobile view */}
        <BrandLogo imgHeight="50px" showText={true} className="fs-5" />

        {/* Navbar Toggler Button for Mobile */}
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

      {/* Layout for wider screens (> md) */}
      <div className="d-none d-md-flex w-100 align-items-center">
        {/* "Studentportalen" text on the left for wider screens */}
        <div className="d-flex align-items-center">
          <Link className="navbar-brand m-0 fs-5" to="/">
            Studentportalen
          </Link>
        </div>

        {/* Image in the center of the navbar for wider screens */}
        <div className="d-flex justify-content-center mx-auto">
          {/* Using BrandLogo component for desktop image */}
          <BrandLogo imgHeight="100px" showText={false} />
        </div>

        {/* Navigation links for wider screens */}
        <NavItems itemClasses="me-3 fs-5" />
      </div>

      {/* Offcanvas Menu for Mobile (visible below md breakpoint) */}
      <div
        className="offcanvas offcanvas-end navbar-dark d-md-none"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <div className="flex-grow-1 d-flex justify-content-center align-items-center">
            {/* Using BrandLogo component for offcanvas header */}
            <BrandLogo orientation="vertical" imgHeight="45px" showText={true} />
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
          {/* Navigation links inside the offcanvas */}
          <NavItems flexDirection="column" />
        </div>
      </div>
    </nav>
  );
}