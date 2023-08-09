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

const images = [
  bbzinha2,
  bbzinho1,
  bbzinha1,
  bbzinho2,
  bbzinha3,
  bbzinho3,
  bbzinha4,
  bbzinho4,
];

const Projects = (props) => {
  // console.log(props.size.width)

  return (
    <div className="projects" id="projects">
      <div className="tittle">
        <h1>Projects</h1>
      </div>
      {/* <Carrossel width={props.size.width} /> */}
      <div className="max-w-lg" >
        <Carousel autoSlide={false}>
          {images.map((image, i) => (
            <img src={image} alt="dlkawjawldk" key={i} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
