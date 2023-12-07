import React, {useState} from "react";

const CustomAlert = ({ variant, response }) => {
  const[open, setOpen] = useState(true);
  if(open)
  return (
    <div
      className={`md:w-[38%] w-[80%] box-border m-[15px] p-0 text-[2rem] leading-[1.6] 
    text-[#333] flex justify-center fixed md:top-12 bottom-0 md:bottom-auto md:right-0 md:left-auto left-0 rounded-md`}
      style={{
        background: variant.mainColor,
        border: "0.1rem solid" + variant.secondaryColor,
      }}
    >
      <div className="w-[86px] flex justify-center items-center rounded-l-[4px]" style={{ background: variant.secondaryColor }}>
        <span class="material-symbols-outlined symbol">{variant.symbol}</span>
      </div>
      <div className="w-full text-[1.05rem] mx-[20px] my-[15px] text-left">
        <span className="font-bold">{variant.title}:</span>
        <span> {response}</span>
      </div>
      <div className="flex-row flex ">
        <span class="material-symbols-outlined symbol-close"
        onClick={() => setOpen(false)}>Close</span>
 
        </div>
    </div>
  );
};

export default CustomAlert;
