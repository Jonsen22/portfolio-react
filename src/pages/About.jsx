// import React, { useState, useEffect } from "react";
// import "../index.css";
import "./about.css";

const About = (props) => {
  var skills = [
    "C#",
    ".NET",
    "EF Core",
    "Java",
    "SpringBoot",
    "JavaScript",
    "React",
    "Redux",
    "Electron",
    "SQLServer",
    "MongoDB",
    "Xunit",
    "Git",
    "CI/CD",
    "Xunit",
    "JUnit",
    "Selenium",
    "Docker",
    "REST",
  ];

  const size = props.size;
  // console.log(size.height < 930)
  const isSmallScreen = size.width > 867;
  const isSmallHeight = size.height > 930;

  return (
    <div className=" about flex items-center justify-start flex-col" id="about">
      <div>
        <div className="mx-0.5 ">
          <h1>About</h1>
        </div>
        <div className="max-w-full w-fit text-start mx-3 leading-5">
          <p>
            My name is Gabriel Jansen, I'm a FullStack developer based in
            Brazil, Rio de Janeiro -- Also a game developer and a modder. I'm
            passionate about technology, gaming, and cats.
          </p>
          <p>
            I graduated as a Bachelor in Information Systems at the Universidade
            Federal do Estado do Rio de Janeiro (UNIRIO) in 2023.
          </p>
        </div>
      </div>

      {isSmallScreen && isSmallHeight ? (
        <div className="w-full flex flex-row mt-3.5">
          <div className=" flex-1 m-4 pl-7">
            <h3 className="text-lg font-semibold">Skills</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill} className="text-sm ">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="experience flex-1 p-4 pr-10">
            <h3 className="text-lg font-semibold">Experience</h3>
            <span className="text-purple-600">LDA Sistemas e Consultoria</span>
            <br />
            <span className="font-semibold">FullStack Web Developer</span>
            <br />
            <span>06/2022 - Current</span>
            <ul className="list-disc ml-4">
              <li>Develop new features and maintain existing applications.</li>
              <li>
                Designed and developed an API for document download automation
                in the insurers sites ( .Net, Windows Form, Selenium, MSSQL),
                reducing manual effort resulting in significant time and cost
                savings for the organization.
              </li>
              <li>Integrated a new API system for sms.</li>
            </ul>
            <span className="text-purple-600">DataPrev</span>
            <br />
            <span className="font-semibold">
              FullStack Web Developer Intern
            </span>
            <br />
            <span>11/2019 - 03/2020</span>
            <ul className="list-disc ml-4">
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
        <div className="bottomAbout mt-[15%]">
          <div className="skills">
            <h3>Skills</h3>

            {/* <span> */}
            {skills.map((skill, i) => (
              <span key={i}>
                {i < skills.length - 1 ? skill + " | " : skill}
              </span>
            ))}
            {/* C# | .NET | EF Core | Java | SpringBoot | JavaScript | React |
              Redux | TypeScript | jQuery | Electron | MSSQL | NoSQL | Git |
              CI/CD | JUnit | Selenium | Unit Testing | Construct 2 | REST
            </span> */}
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

// export default About;


// import React, { useState, useEffect } from "react";
// import "./about.css";

// const About = (props) => {
//   var skills = [
//     "C#",
//     ".NET",
//     // ... (other skills)
//   ];

//   const size = props.size;
//   const isSmallScreen = size.width > 867;
//   const isSmallHeight = size.height > 930;

//   return (
//     <div className="about" id="about">
//       <div className="topAbout">
//         <div className="title">
//           <h1>About</h1>
//         </div>
//         <div className="text">
//           <p>
//             My name is Gabriel Jansen, I'm a FullStack developer based in
//             Brazil, Rio de Janeiro -- Also a game developer and a modder. I'm
//             passionate about technology, gaming, and cats.
//           </p>
//           <p>
//             I graduated as a Bachelor in Information Systems at the Universidade
//             Federal do Estado do Rio de Janeiro (UNIRIO) in 2023.
//           </p>
//         </div>
//       </div>

//       {isSmallScreen && isSmallHeight ? (
//         <div className="bottomAbout flex flex-row">
//           <div className="skills flex-1 m-4">
//             <h3 className="text-lg font-semibold">Skills</h3>
//             <ul>
//               {skills.map((skill) => (
//                 <li key={skill} className="text-sm">
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="experience flex-1 m-4">
//             <h3 className="text-lg font-semibold">Experience</h3>
//             <span className="text-purple-600">LDA Sistemas e Consultoria</span>
//             <br />
//             <span className="font-semibold">FullStack Web Developer</span>
//             <br />
//             <span>06/2022 - Current</span>
//             <ul className="list-disc ml-4">
//               <li>
//                 Develop new features and maintain existing applications.
//               </li>
//               <li>
//                 Cooperated on the implementation of WSO2 for efficient API
//                 management within the organization.
//               </li>
//               <li>Integrated a new API system for sms.</li>
//             </ul>
//             <h3 className="text-lg font-semibold">Experience</h3>
//             <span className="text-purple-600">DataPrev</span>
//             <br />
//             <span className="font-semibold">Inter FullStack Web Developer</span>
//             <br />
//             <span>11/2019 - 03/2020</span>
//             <ul className="list-disc ml-4">
//             <li>
//                 Collaborated on the creation of a web page utilizing React-Redux
//                 for the frontend and Java for the backend.
//               </li>
//               <li>
//                 Cooperated on the implementation of WSO2 for efficient API
//                 management within the organization.
//               </li>
//               <li>Unit testing(JUnit) in some applications.</li>
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <div className="bottomAbout">
//           <div className="skills">
//             <h3>Skills</h3>
//             <span>
//               C# | .NET | EF Core | Java | SpringBoot | JavaScript | React |
//               Redux | TypeScript | jQuery | Electron | MSSQL | NoSQL | Git |
//               CI/CD | JUnit | Selenium | Unit Testing | Construct 2 | REST
//             </span>
//           </div>
//           <div className="experience">
//             <h3>Experience</h3>
//             <span style={{ color: "#7b74ff" }}>LDA Sistemas e Consultoria</span>
//             <br />
//             <span>FullStack Web Developer </span>
//             <br />
//             <span>06/2022 - Current</span>
//             <br />
//             <br />
//             <span style={{ color: "#7b74ff" }}>DataPrev</span>
//             <br />
//             <span>Intern FullStack Web Developer </span>
//             <br />
//             <span>11/2019 - 03/2020</span>
//             <br />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default About;
