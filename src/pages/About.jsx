// import React, { useState, useEffect } from "react";
import "../index.css";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="text">
        <p>
          My name is Gabriel Jansen, I'm a FullStack developer based in Brazil,
          Rio de Janeiro -- Also a game developer and a modder. I'm passionate
          about technology, gaming and cats.
        </p>
        <p>
          I graduated as a Bachelor in Information Systems from the Universidade
          Federal do Estado do Rio de Janeiro (UNIRIO) in 2023.
        </p>
      </div>
      <div className="bottomAbout">
        <div className="skills">
          <h3>Skills</h3>
          <span>C# | .NET | EF Core | Java | SpringBoot | JavaScript 
            | React | Redux | TypeScript | jQuery | Electron | MSSQL 
            | NoSQL | Git | OracleDB | CI/CD | JUnit | Selenium 
            | Unit Testing | Lambda | OOP | Construct 2 | REST  
          </span>
        </div>
        <div className="experience">
          <h3>Experience</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
