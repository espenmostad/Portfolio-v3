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
        <h1>Portfolio</h1>
        <nav>
          <ul>
            <li><a href="">About me</a></li>
            <li><Contact email={email}  /></li>
            <li><a href="">Projects</a></li>
          </ul>
          
        </nav>
        
    </header>
      );
  }