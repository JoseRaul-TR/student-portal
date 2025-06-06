import React from "react";
import { Link } from "react-router-dom";

import Hogwartscrest from "../assets/Hogwartscrest.webp";

export default function BrandLogo({
  orientation = "horizontal",
  imgHeight = "50px",
  showText = true,
  className = "",
}) {
  const flexClasses =
    orientation === "vertical"
      ? "d-flex flex-column align-items-center"
      : "d-flex flex-row justify-content-between align-items-center";
  const textClasses = orientation === "vertical" ? "mt-1" : "ms-1";
  const imageMargin = orientation === "vertical" ? "mb-1" : "me-1";

  return (
    <Link className={`navbar-brand m-0 ${flexClasses} ${className}`} to="/">
      <img
        src={Hogwartscrest}
        alt="Hogwarts vapensköld"
        style={{ height: imgHeight }}
        className={`d-inline-block ${imageMargin}`}
      />
      {showText && <span className={textClasses}>Studentportalen</span>}
    </Link>
  );
}
