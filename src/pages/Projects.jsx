import React from "react";
// import Carrossel from "../components/Carrossel";
import "./projects.css";
import Carousel from "../components/Carousel";

import bbzinha1 from "../images/bbzinha1.jpg";
import bbzinha2 from "../images/bbzinha2.jpg";
import bbzinha3 from "../images/bbzinha3.jpg";
import bbzinha4 from "../images/bbzinha4.jpg";

import bbzinho1 from "../images/bbzinho1.jpg";
import bbzinho2 from "../images/bbzinho2.jpg";
import bbzinho3 from "../images/bbzinho3.jpg";
import bbzinho4 from "../images/bbzinho4.jpg";

// https://picsum.photos/200/300

const projetos = [
  {
    image: bbzinha2,
    text: "bbzinha2",
  },
  {
    image: bbzinho1,
    text: "bbzinho1",
  },
  {
    image: bbzinha1,
    text: "bbzinha1",
  },
  {
    image: bbzinho2,
    text: "bbzinho2",
  },
  {
    image: bbzinha3,
    text: "bbzinha3",
  },
  {
    image: bbzinho3,
    text: "bbzinho3",
  },
  {
    image: bbzinha4,
    text: "bbzinha4",
  },
  {
    image: bbzinho4,
    text: "bbzinho4",
  },
];

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
