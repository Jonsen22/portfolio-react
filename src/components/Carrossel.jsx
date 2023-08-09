import { motion } from "framer-motion";
import "./carrossel.css";
import { useRef } from "react";

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

const Carrossel = (props) => {
  const boxRef = useRef(null);
  const isSmallScreen = props.width > 768;

  return (
    <div className="main">
      <div
        ref={boxRef}
        key={"dwakjwa"}
        className="carousel"
        // whileTap={{ cursor: "grabbing" }}
      >
        <motion.div className="inner" drag="x" dragConstraints={boxRef}>
          {images.map((image, index) =>
            isSmallScreen ? (
              <motion.div className="item">
                <img src={image} alt="texto alt" key={index} />
                <div className="descricao">
                  {" "}
                  dlkawjdkla lk l kdjawlk djlk jlkaw jldkald aw lkwdajdklawj
                  lkdawlk{" "}
                </div>
              </motion.div>
            ) : (
              <motion.div className="item" style={{ minWidth: "200px" }}>
                <img src={image} alt="texto alt" key={image} style={{ height: "50%"}} />
                <div className="descricao" style={{ height: "50%"}}>
                  {" "}
                  dlkawjdkla lk l kdjawlk djlk jlkaw jldkald aw lkwdajdklawj
                  lkdawlk{" "}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Carrossel;
