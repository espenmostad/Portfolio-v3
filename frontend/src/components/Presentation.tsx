import React from "react";
import Contact from "./Contact";

// Header
type HeaderProps = {
    student: string;
    degree: string;
    points: number;
    email: string;
  };
  
  export default function Header(data: HeaderProps) {
    const { student, degree, points,email } = data;
    
    console.log("Email in Header:", email);  // Debug log
  
    return (
    <header>
        <h1>{student}</h1> <p>{degree} - {points} credits</p>
        <Contact email={email}  />
    </header>
      );
  }