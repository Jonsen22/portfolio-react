import React from "react";
import Carrossel from "../components/Carrossel";
import "./projects.css"

const Projects = (props) => {
  // console.log(props.size.width)

  return (
    <div className="projects" id="projects">
      <div className="tittle">
        <h1>Projects</h1>
      </div>
      <Carrossel width={props.size.width} />
    </div>
  );
};

export default Projects;
