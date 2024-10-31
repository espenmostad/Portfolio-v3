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
    <section className="white-bg">
        <h2>{student}</h2> 
        <p>{degree} - {points} credits</p>
    </section>
      );
  }