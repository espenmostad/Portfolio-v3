
// Experience
import type { PropsWithChildren } from "react";
import React from "react";

type ExperienceProps = {
    description: string;
  };
  
export default function Experience(
  props: Readonly<PropsWithChildren<ExperienceProps>>
) {
  const { children, description } = props;

  return (
    <React.Fragment>
      {children}
      <p>{description}</p>
    </React.Fragment>
  );
}
