
import React from "react";

function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="result bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Quiz terminé !</h2>
      <p className="text-xl mb-4">Vous avez obtenu {score} sur {totalQuestions}.</p>
      <button
        onClick={onRestart}
        className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Rejouer
      </button>
    </div>
  );
}

export default Result;



