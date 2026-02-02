import React from "react";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
        {CORE_CONCEPTS.map((concept) => {
          return <CoreConcept key={concept.title} {...concept} />;
        })}
      </ul>
    </section>
  );
};

export default CoreConcepts;
