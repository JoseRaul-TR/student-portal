import React from "react";
import BrandLogo from "./BrandLogo";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark p-2 py-md-3 px-md-4 container-fluid d-flex align-items-center">
      <div className="d-flex w-100 flex-row align-items-center justify-content-center justify-content-md-between">
        {/* Brand Logo with Link */}
        <div className="navbar-brand m-0 fs-5 d-flex align-items-center" to="/">
          <BrandLogo imgHeight="50px" showText={true} className="me-2" />
        </div>

      {/* Navbar Toggler Button for Mobile - hidden from md and up*/}
        <button
          className="navbar-toggler d-md-none ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Öppna menyn"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links for wider screens - visible only on md and up */}
        <div className="d-none d-md-flex">
          <NavItems itemClasses="me-3 fs-5" />
        </div>
      </div>

      {/* Offcanvas Menu for Mobile (visible below md) */}
      <div
        className="offcanvas offcanvas-end navbar-dark d-md-none"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <div className="flex-grow-1 d-flex justify-content-center align-items-center">
            <BrandLogo
              orientation="vertical"
              imgHeight="45px"
              showText={true}
            />
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Stäng meny"
          />
        </div>
        <div className="offcanvas-body">
          <NavItems flexDirection="column" />
        </div>
      </div>
    </nav>
  );
}
