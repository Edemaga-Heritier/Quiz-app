import React from "react";

function Quiz({ question, options, handleAnswer }) {
  return (
    <div className="quiz">
      <h2 className="text-3xl font-bold mb-4">{question}</h2>
      <div className="flex flex-col space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
