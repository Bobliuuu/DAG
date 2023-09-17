import AnimatedText from "../components/AnimatedText";
import React, { useState } from "react";

export default function Host() {
  const [selectedModel, setSelectedModel] = useState("Select Model");
  const [selectedDataset, setSelectedDataset] = useState("Select Dataset");
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [isDatasetDropdownOpen, setIsDatasetDropdownOpen] = useState(false);
  const [loadingText, setLoadingText] = useState([]);

  const modelOptions = [
    "bird-classification-checkpoint-004.pth.",
    "whiteboard-ocr-checkpoint-005.pth.",
    "map-segmentation-checkpoint-007.pth.",
  ];

  const datasetOptions = [
    "Bird classification",
    "Map classification",
    "Whiteboard OCR",
  ];

  const handleModelSelect = (model) => {
    setSelectedModel(model);
  };

  const handleDatasetSelect = (dataset) => {
    setSelectedDataset(dataset);
  };

  const handleSubmit = () => {
    const messages = [
      "Running neural architecture search...",
      "Top 5 Architectures:",
      "Architecture [(8, 'relu'), (32, 'sigmoid'), (3, 'softmax')]",
      "Validation Accuracy: 0.7597384968201943",
      "Running from checkpoint 004",
      "Saved checkpoint for step 110: ./tf_ckpts/ch-1.pth",
      "loss 0.22",
      "Saved checkpoint for step 120: ./tf_ckpts/ch-2.pth",
      "loss 0.19",
      "Saved checkpoint for step 130: ./tf_ckpts/ck-3.pth",
      "loss 0.18",
      "Final checkpoint saved in ./tf_ckpts/ck-3.pth"
    ];
    displayLoadingText(messages, 0);
  };

  const displayLoadingText = (messages, index) => {
    if (index < messages.length) {
      setLoadingText((prevText) => [...prevText, messages[index]]);
      setTimeout(() => {
        displayLoadingText(messages, index + 1);
      }, 1000); 
    }
  };

  return (
    <>
      <div className="bg-upload flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-extrabold">
            <AnimatedText sentence="Run" styling="" horizontal={true} />
          </h1>
          <div className="pt-5">
            <AnimatedText
              sentence="Run your model, and we'll validate"
              styling="text-2xl font-light"
              horizontal={true}
            />
          </div>
          <div className="pt-5 flex flex-row gap-5">
            <div className="relative inline-block">
              <button
                className="flex items-center justify-between w-40 max-w-xs bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg py-3 px-4"
                onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
              >
                
                <span className="text-1xl text-5 pr-2">{selectedModel}</span>
                <span className="text-base">▼</span>
              </button>
              {isModelDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {modelOptions.map((model) => (
                    <button
                      key={model}
                      onClick={() => handleModelSelect(model)}
                      className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
                    >
                      {model}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative inline-block">
              <button
                className="flex items-center justify-between w-60 max-w-xs bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg py-3 px-4"
                onClick={() => setIsDatasetDropdownOpen(!isDatasetDropdownOpen)}
              >
                <span className="text-1xl text-5 pr-2">{selectedDataset}</span>
                <span className="text-base">▼</span>
              </button>
              {isDatasetDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {datasetOptions.map((dataset) => (
                    <button
                      key={dataset}
                      onClick={() => handleDatasetSelect(dataset)}
                      className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
                    >
                      {dataset}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button 
              className="flex items-center justify-center w-40 max-w-xs bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg py-3 px-4"
              onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="pt-5">
            {loadingText.map((text, idx) => (
              <div key={idx} className="text-sm mt-2">{text}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}