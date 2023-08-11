import React from "react";
// import Carrossel from "../components/Carrossel";
import "./projects.css";
import Carousel from "../components/Carousel";



const Projects = (props) => {
  // console.log(props.size.width)

  return (
    <div className="projects" id="projects">
      <div className="tittle">
        <h1>Projects</h1>
      </div>
      {/* <Carrossel width={props.size.width} /> */}
      <div className="h-full w-full">
        <Carousel autoSlide={false}>
          {/* {projetos.map((projeto, i) => (
            <div key={i} className="">
              <div className="">
                <img src={projeto.image} alt="dlkawjawldk"  />
              </div>
              <div>{projeto.text}</div>
            </div>
          ))} */}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
