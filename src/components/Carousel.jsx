import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";

import phasmo from "../images/phasmoRPG.png";
import phasmo2 from "../images/phasmoRPG2.png";
import bbzinha2 from "../images/bbzinha2.jpg";
import bbzinha3 from "../images/bbzinha3.jpg";
import bbzinha4 from "../images/bbzinha4.jpg";

import bbzinho1 from "../images/bbzinho1.jpg";
// import bbzinho2 from "../images/bbzinho2.jpg";
import bbzinho3 from "../images/bbzinho3.jpg";
import bbzinho4 from "../images/bbzinho4.jpg";

export default function Carousel() {
  // https://picsum.photos/200/300

  const projetos = [
    {
      image: bbzinha2,
      title: "bbzinha2",
      text: "bbzinha2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: bbzinho1,
      title: "bbzinha2",
      text: "bbzinho1",
    },
    {
      image: phasmo,
      title: "PhasmoRPG",
      text: "desktop application using React and Electron to enhance the difficulty of the game Phasmophobia. Created a tool that introduces additional challenges and features to make the gameplay more challenging and engaging for players.",
    },
    {
      image: phasmo2,
      title: "bbzinha2",
      text: "bbzinho2",
    },
    {
      image: bbzinha3,
      title: "bbzinha2",
      text: "bbzinha3",
    },
    {
      image: bbzinho3,
      title: "bbzinha2",
      text: "bbzinho3",
    },
    {
      image: bbzinha4,
      title: "bbzinha2",
      text: "bbzinha4",
    },
    {
      image: bbzinho4,
      title: "bbzinha2",
      text: "bbzinho4",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projetos.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projetos.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex flex-col items-center mt-10 relative h-96 m-4">
     <div className="relative w-full h-[100%] max-w-lg">
  <img
    src={projetos[currentSlide].image}
    alt={`Slide ${currentSlide}`}
    className="w-full h-full object-fit shadow rounded-t-xl"
  />
</div>
<div className="p-4 bg-indigo-900 rounded-b-xl w-full max-w-lg">
  <p>{projetos[currentSlide].title}</p>
  <span>{projetos[currentSlide].text}</span>
</div>
<div className="flex justify-between absolute bottom-3 w-full max-w-lg p-4"> {/* Updated line */}
  <button
    onClick={handlePrevSlide}
    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
  >
    <ChevronLeft />
  </button>
  <button
    onClick={handleNextSlide}
    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
  >
    <ChevronRight />
  </button>
</div>
      <div className="absolute bottom-96 right-0 left-0 pb-3">
        <div className="flex items-center justify-center gap-2 ">
          {projetos.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`
                transition-all w-3 h-3 bg-white rounded-full cursor-pointer
                ${currentSlide === i ? "p-2" : "bg-opacity-50"}
                `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
