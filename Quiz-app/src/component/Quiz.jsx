import React, { useState } from "react";

function Quiz({ question, options, handleAnswer }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (option) => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      handleAnswer(option);
    }, 300); // Délai de l'animation avant de passer à la question suivante
  };

  return (
    <div className="quiz shadow-xl rounded-lg p-8 max-w-lg mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-black-800 animate-slide-in">
        {question}
      </h2>
      <div className="flex flex-col space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={`bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300 ${
              clicked ? "animate-click" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
