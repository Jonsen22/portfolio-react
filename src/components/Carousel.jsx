import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState, useEffect } from "react";

import bicicletaApi from "../images/bicicletaApi.png";
import thunderSports from "../images/thunderSports.png";
import phasmoRPG from "../images/phasmophobia.png";
import SQLand from "../images/SQLand.png";
import Petdor from "../images/PetDor.png";

var budgetOrganizer = "https://static.vecteezy.com/system/resources/previews/002/389/655/original/personal-budget-planning-rgb-color-icon-vector.jpg";

export default function Carousel() {
  // https://picsum.photos/200/300

  const projetos = [
    {
      image: budgetOrganizer,
      title: "BudgetOrganizer",
      text: "A simple budget organizer built with C#, including authentication using JWT, React, SQL Server, and Docker. The main focus of this project was to deepen my knowledge of Docker and practice unit testing with xUnit.",
      link: "https://github.com/Jonsen22/FinancialOrganizer",
    },
    {
      image: phasmoRPG,
      title: "PhasmoRPG",
      text: "Desktop application using React and Electron to enhance the difficulty of the game Phasmophobia. Created a tool that introduces additional challenges and features to make the gameplay more challenging and engaging for players.",
      link: "https://github.com/Jonsen22/PhasmoRPG",
    },
    {
      image: Petdor,
      title: "Pet D'or",
      text: "Website created for a college subject, utilizing C# in the backend as a REST service, and employing React and Next.js for the frontend.",
      link: "https://github.com/Jonsen22/PetDor",
    },
    {
      image: bicicletaApi,
      title: "BicicletaApi",
      text: "Bike rental system based on microservices architecture, utilizing Java and adhering to industry best practices in microservice development.",
      link: "https://github.com/Jonsen22/BicicletaAPI",
    },
    {
      image: thunderSports,
      title: "Thunder Sports",
      text: "Interactive web page with React that seamlessly integrates APIs for basketball and Formula One, showcasing live and up-to-the-minute results for both sports. Incorporated real-time data refresh to guarantee users have constant access to the most current information.",
      link: "https://github.com/marcosvmgil/thunder-sports",
    },
    {
      image: SQLand,
      title: "SQLand",
      text: "SQL educational game made using construct 2.",
      link: "https://sqland.netlify.app/",
    },

  ];
  const imagesToPreload = [budgetOrganizer, phasmoRPG, Petdor, bicicletaApi, thunderSports, SQLand ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projetos.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projetos.length - 1 : prevSlide - 1
    );
  };

/* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const loadImage = async (src) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;

        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
      });
    };

    const preloadAllImages = async () => {
      try {
        const loadedImages = await Promise.all(imagesToPreload.map(loadImage));
        // At this point, all images are successfully loaded
        setPreloadedImages(loadedImages);
      } catch (error) {
        console.error(error);
      }
    };

    preloadAllImages();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 relative h-4/5 m-4">
      <div className="bg-indigo-900 w-full h-auto max-w-lg rounded-xl relative">
        <div className="  bg-indigo-900 z-40 rounded-t-xl flex items-center justify-center">
          <a href={projetos[currentSlide].link} target="_blank" rel="noopener noreferrer"
           className="w-[33%] h-[87%] rounded-xl mt-3 2xl:w-[50%]">
            <img
              loading="eager"
              src={preloadedImages[currentSlide]?.src || ""}
              alt={`Slide ${currentSlide}`}
              className="w-full h-full object-contain shadow rounded-xl mt-3  "
            />
          </a>
        </div>
        <div className="flex z-2 justify-between static w-full max-w-lg p-2  ">
          {" "}
          {/* Updated line */}
          <button
            onClick={handlePrevSlide}
            className="p-1 ml-5 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNextSlide}
            className="p-1 mr-5 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="p-2 bg-indigo-900 rounded-b-xl w-full flex-grow-1 max-w-lg pb-6">
          
          <a href={projetos[currentSlide].link} target="_blank" rel="noopener noreferrer" className="text-purple-600 pb-2 text-xl md:text-3xl 2xl:text-4xl underline">
            {projetos[currentSlide].title} 
          </a>
          <br/>
          <span className="text-sm md:text-base 2xl:text-xl">
            {projetos[currentSlide].text}
          </span>
        </div>
        
        <div className="absolute -top-6 right-0 left-0 pb-3">
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
    </div>
  );
}
