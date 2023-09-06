import React from "react";

const Contact = (props) => {
  return (
    <div className="contact flex flex-col " id="contact">
      <h1>Contact</h1>
      <div className="flex flex-wrap justify-around md:justify-between m-4 mt-16 h-[65%]  md:flex-row flex-col items-center">
        <div className="h-1/2 w-full md:h-1/2 md:w-1/2 flex flex-col justify-end">
          <div className="flex-col flex items-start relative pl-14">
            <span className="w-full text-left">Your name:</span>
            <input className="w-2/3 "></input>
          </div>
          <div className="pt-5 flex-col flex items-start relative pl-14">
            <span className="w-full text-left">Your email:</span>
            <input className="w-2/3 "></input>
          </div>
        </div>
        <div className="md:h-1/2 md:w-1/2 hidden md:block pr-10">
          <div className="bg-slate-600 w-full h-full rounded-full"></div>
        </div>
        <div className="h-1/2 md:h-1/2  w-full">
          <div className="pt-5 flex-col flex items-start relative pl-14 h-full">
            <span className="w-full text-left">Your message:</span>
            <textarea className="w-2/3 h-2/3 resize-none"></textarea>
            <div className="flex mt-3 w-2/3 justify-end">
            <button className=" self-end">Send it</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
