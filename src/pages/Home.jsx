import React, { useState, useEffect, useCallback } from "react";
// import "../index.css";
import "./home.css";
import Eu from "../images/Eu.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';




const Home = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const size = props.size;
  const isSmallScreen = size.width > 768;


  // console.log(size)
  
  const handleScroll = useCallback(() => {
    if (window.scrollY > size.height / 5) {
      setScrollY(window.scrollY);
    } else {
      setScrollY(0);
    }
  }, [size]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const divStyle = {
    "--scrollY": `${15 * (scrollY)}px`,
    "--scrollY2": `${-15 * scrollY}px`,
    marginLeft: "10%",

  };
  const divStyle2 = {
    "--scrollY": `${15 * scrollY}px`,
    "--scrollY2": `${-15 * scrollY}px`,

  };

  return (
    <div className="home">
      <div className=" flex flex-col h-full">
        {isSmallScreen ? (
          <div className="welcome pl-[10%]">
            <div className="welcome-text" style={divStyle}>
              <h1 className="m-0">Welcome!</h1>
              <span>
                My name is Gabriel Jansen, I'm a FullStack developer based in
                Brazil, Rio de Janeiro.
              </span>
            </div>

            <div className="welcome-photo">
              <img className="photo1" src={Eu} alt="placeholder" />
            </div>
          </div>
        ) : (
          <div className="welcome">
            <div className="welcome-text" style={divStyle2}>
              <h1 className="title-home">Welcome!</h1>
              <span>
                My name is Gabriel Jansen, I'm FullStack developer based in
                Brazil, Rio de Janeiro.
              </span>
            </div>
          </div>
        )}
        <div className="icons">
          <a
            href="https://github.com/Jonsen22"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-jansen2/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        
            <a
              href="https://drive.google.com/file/d/12o6SFAQc-RXC1jjE3Zn5UDYzxzYLhxOv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="resume"
            >

                <PictureAsPdfIcon />
              <span className="tooltip">Resume</span>
    

            </a>
      
        </div>
      </div>
    </div>
  );
};

export default Home;
