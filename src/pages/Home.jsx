import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
      <div className="text-center py-5 home-section">
        <h1 className="display-4 mb-4">Välkommen till Howarts studentportalen!</h1>
        <p className="lead mb-5">Din centrala plats för kursinformtion, nyheter och registrering.</p>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center quick-menu-buttons">
        <Link to="/courses" className="btn btn-primary btn-lg m-2">Utforska Kurser</Link>
        <Link to="/news" className="btn btn-secondary btn-lg m-2">Läs Nyheter</Link>
        <Link to="/registration" className="btn btn-success btn-lg m-2">Registrera dig till en kurs</Link>
      </div>
      </div>
  );
}
