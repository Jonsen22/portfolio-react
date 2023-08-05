// import React, { useState, useEffect } from "react";
// import "../index.css";
import { green } from "@mui/material/colors";
import "./about.css";

const About = (props) => {
  
  const width = props.width;
  console.log(width.height < 930)
  const isSmallScreen = width.width > 768;
  const isSmallHeight = width.height > 930;

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

      {(isSmallScreen && isSmallHeight)  ? (
      // {isSmallScreen   ? (
        <div className="bottomAbout">
          <div className="skills">
            <h3>Skills</h3>
            <span>
              C# | .NET | EF Core | Java | SpringBoot | JavaScript | React |
              Redux | TypeScript | jQuery | Electron | MSSQL | NoSQL | Git |
              CI/CD | JUnit | Selenium | Unit Testing | Construct 2 | REST
            </span>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <span style={{ color: "#7b74ff" }}>LDA Sistemas e Consultoria</span>
            <br />
            <span>FullStack Web Developer </span>
            <br />
            <span>06/2022 - Current</span>
            <ul >
              <li>Develop new features and maintain existing applications.</li>
              <li>
                Cooperated on the implementation of WSO2 for efficient API
                management within the organization.
              </li>
              <li>Integrated a new API system for sms.</li>
            </ul>
            <br />
            <span style={{ color: "#7b74ff" }}>DataPrev</span>
            <br />
            <span>Intern FullStack Web Developer </span>
            <br />
            <span>11/2019 - 03/2020</span>
            <br />
            <ul >
              <li>
                Collaborated on the creation of a web page utilizing React-Redux
                for the frontend and Java for the backend.
              </li>
              <li>
                Cooperated on the implementation of WSO2 for efficient API
                management within the organization.
              </li>
              <li>Unit testing(JUnit) in some applications.</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bottomAbout">
          <div className="skills">
            <h3>Skills</h3>
            <span>
              C# | .NET | EF Core | Java | SpringBoot | JavaScript | React |
              Redux | TypeScript | jQuery | Electron | MSSQL | NoSQL | Git |
              CI/CD | JUnit | Selenium | Unit Testing | Construct 2 | REST
            </span>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <span style={{ color: "#7b74ff" }}>LDA Sistemas e Consultoria</span>
            <br />
            <span>FullStack Web Developer </span>
            <br />
            <span>06/2022 - Current</span>
            <br />
            <br />
            <span style={{ color: "#7b74ff" }}>DataPrev</span>
            <br />
            <span>Intern FullStack Web Developer </span>
            <br />
            <span>11/2019 - 03/2020</span>
            <br />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
