import React from "react";
import { Link } from "react-router-dom";
import HowartsCrest from "../assets/Hogwartscrest.webp";

export default function Home() {
  return (
    <div className="text-center py-5 home-section">
      <img
        src={HowartsCrest}
        alt="Howarts Crest"
        style={{ maxWidth: "200px", height: "auto", marginBottom: "30px" }}
        className="img-fluid"
      />
      <h1 className="display-4 mb-4">
        Välkommen till Hogwarts skola för häxkonst och trolldom Studentportalen!
      </h1>
      <p className="lead mb-5">
        Din centrala plats för kursinformtion, nyheter och registrering.
      </p>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center quick-menu-buttons">
        <Link to="/courses" className="btn btn-primary btn-lg m-2">
          Utforska Kurser
        </Link>
        <Link to="/studentblogg" className="btn btn-secondary btn-lg m-2">
          Studentblogg
        </Link>
        <Link to="/registration" className="btn btn-success btn-lg m-2">
          Registrera dig till en kurs
        </Link>
      </div>
    </div>
  );
}
