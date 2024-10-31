import React, { PropsWithChildren } from "react";
import Experience from "./Experience";
import { ExperiencesProps } from "./types";

// Experiences

  export default function Experiences(props: Readonly<PropsWithChildren<ExperiencesProps>>) {
    const { experiences, children } = props;
    return (
      <section className="white-bg">
        <h2>My experiences:</h2>
        {children}
        {experiences.length === 0 ? (
          <p>No experiences available.</p>
        ) : (
        <ul>
          {experiences.map((experience: ExperiencesProps) => (
            <li key={experience.id}><Experience description={experience.description}/></li>
          ))}
        </ul>
        )}
      </section>
      
    )
  }
