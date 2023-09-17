import AnimatedText from "../components/AnimatedText";
import React, { useState } from "react";

export default function host() {
  const [selectedOption, setSelectedOption] = useState("Select");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["bird-classification-checkpoint-004.pth.", "lizard-classification-checkpoint-005.pth. ", "bird-classification-checkpoint-007.pth. "];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="bg-upload flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-extrabold">
            <AnimatedText sentence="Host  Your  Device" styling="" horizontal={true} />
          </h1>
          <div className="pt-5">
            <AnimatedText
              sentence="Unused processing power? DAG can leverage it and help you earn cryptocurrency at the same time!"
              styling="text-2xl font-light"
              horizontal={true}
            />
          </div>
          <div className="pt-5 relative inline-block">
          <button
  className="flex items-center justify-between w-32 max-w-xs bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg py-3 px-4" // Added px-4
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
>
  <span className="text-1xl text-5 pr-2">{selectedOption}</span> 
  <span className="text-base">▼</span>
</button>


            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="pt-5">
            <AnimatedText
              sentence=""
              styling="text-sm"
              horizontal={false}
            />
            <div className="flex flex-row gap-10 pt-5">
              {/* Images here */}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}