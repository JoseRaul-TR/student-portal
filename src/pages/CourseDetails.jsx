import React from "react";
import { useParams } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    name: "Introduktion till Programmering",
    description: "En grundläggande kurs i programmering.",
    details:
      "Denna kurs ger en introduktion till grundläggande programmeringskoncept såsom variabler, loopar och funktioner. Inga förkunskaper krävs.",
  },
  {
    id: 2,
    name: "Avancerad JavaScript",
    description: "Fördjupa dina kunskaper i JavaScript.",
    details:
      "Denna kurs fokuserar på avancerade JavaScript-koncept som asynkron programmering, closures, prototyper och ES6+ funktioner.",
  },
  {
    id: 3,
    name: "Webbutveckling med React",
    description: "Lär dig bygga moderna webbapplikationer med React.",
    details:
      "I denna kurs lär du dig att bygga dynamiska och interaktiva användargränssnitt med React. Vi går igenom komponenter, state, props och routing.",
  },
];

export default function CourseDetails() {
    const { id } = useParams();
    const course = coursesData.find((c) => c.id === parseInt(id));

    if (!course) {
        return <div>Kursen hittades inte.</div>
    }

    return (
        <div>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            {course.details && <p>Detaljer: {course.details}</p>}
        </div>
    );
}