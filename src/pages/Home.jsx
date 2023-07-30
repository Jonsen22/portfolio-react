import React, { useState, useEffect } from "react";
import "../index.css";
import "./home.css";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};


const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { width } = useWindowSize();
  const isSmallScreen = width > 768;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  // console.log(window.innerWidth)

  const handleScroll = () => {
    setScrollY(window.scrollY);
    // console.log(window.scrollY);
  };

  const divStyle = {
    "--scrollY": `${3 * scrollY}px`,
    "--scrollY2": `${-3 * scrollY}px`,
  };

  return (
    <div className="home">
      {isSmallScreen ? (
        <div className="info">
          <div className="info-text" style={divStyle}>
            <h1 className="title-home">Welcome!</h1>
            <span>
              My name is Gabriel Jansen, I'm FullStack developer based in
              Brazil, Rio de Janeiro.
            </span>
          </div>

          <div className="info-photo">
            <img
              className="photo1"
              src="https://placehold.co/300x300.png"
              alt="placeholder"
            />
          </div>
        </div>
      ) : (
        <div className="info">
          <div className="info-text" style={divStyle}>
            <h1 className="title-home">Welcome!</h1>
            <span>
              My name is Gabriel Jansen, I'm FullStack developer based in
              Brazil, Rio de Janeiro.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
