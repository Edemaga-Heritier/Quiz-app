import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/layout'); // Navigue vers la page du quiz
  };

  return (
    <div className="homepage min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <h1 className="text-5xl font-bold mb-6 animate-bounce">Bienvenue au Quiz Challenge!</h1>
      <p className="text-lg mb-8 max-w-md text-center">
        Testez vos connaissances avec notre quiz interactif. Êtes-vous prêt à relever le défi ? Cliquez sur le bouton ci-dessous pour commencer !
      </p>
      <button
        onClick={startQuiz}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 animate-fade-in"
      >
        Commencer le Quiz
      </button>
      
    </div>
  );
}

export default HomePage;
