import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleYesClick = () => {
    nextSlide(); // Go to the next slide
  };

  const handleNoClick = () => {
    nextSlide(); // Go to the next slide
  };

  return (
    <div className="bg-annotate relative mx-auto h-screen w-full max-w-screen-2xl overflow-hidden px-4 py-16 flex flex-col justify-center items-center">
      {/* Header Text */}
      <h1 className="text-7xl font-bold text-white text-center">
        <AnimatedText sentence="Annotate and Earn" styling="" horizontal={false} />
      </h1>
      <AnimatedText
        sentence="Validate, annotate, and earn while helping to enrich the DAG community."
        styling="text-2xl font-light text-white text-center"
        horizontal={true}
      />
      {/* Add a blank line for separation */}
      <div className="h-6"></div>
      {/* Buttons Container */}
      {/* Slideshow Container */}
      <div className="w-full h-80 flex-col items-center justify-center relative">
        {/* Curved white rectangle overlay */}
        <div className="absolute top-10 right-10 w-80 h-60 bg-white bg-opacity-10 rounded">
  <h1 className="ml-5 mt-5 text-white underline text-3xl"><b>DATASET</b></h1>
  <p className='ml-5 text-white'>Flowers</p>
  <h1 className="ml-5 text-white underline text-2xl"><b>TOTAL CRYPTO PAYOUT</b></h1>
  <p className='ml-5 text-white text-6xl font-bold'>0.01 ETH</p>
</div>


        <div
          className="w-full h-80 rounded-2xl bg-cover bg-center duration-500 md:w-full"
          style={{
            backgroundImage: `url(${slides[currentIndex]!.url})`,



          }}
        ></div>
      
        {/* Add a blank line for separation */}
        <div className="h-6"></div>
        <div className="flex justify-center space-x-4">
          <div
            className="font-light text-1xl text-center flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg text-white font-bold cursor-pointer"
            onClick={handleYesClick}
          >
            Yes
          </div>
          <div
            className="font-light text-1xl text-center flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg text-white font-bold cursor-pointer"
            onClick={handleNoClick}
          >
            No
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="mt-4 flex justify-center space-x-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer text-2xl ${
                slideIndex === currentIndex ? "text-white" : "text-gray-400"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
