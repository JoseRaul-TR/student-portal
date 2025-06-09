import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="text-center p-3 w-100 mt-auto d-flex flex-column align-items-center justify-content-center">
            <Link to="/" element={<Home />} className="footer-link text-decoration-none mb-2">
            Hogwarts – Studentportalen
            </Link>
            <p className="footer-text m-0 text-white-50">&copy; {currentYear} – José Raúl Tenza Ramírez</p>
        </div>
    );
}