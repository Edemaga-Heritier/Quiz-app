import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Result({ score, totalQuestions, onRestart }) {
  // Utiliser la taille de la fenêtre pour ajuster l'animation de confettis
  const { width, height } = useWindowSize();
  
  return (
    <div className="result text-center">
      {/* Affiche les confettis seulement si le score est parfait */}
      {score === totalQuestions && <Confetti width={width} height={height} />}

      <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-zoom-in">Quiz Terminé !</h2>
      <p className="text-2xl mb-6 animate-fade-in">Vous avez obtenu {score} sur {totalQuestions}.</p>

      {/* Affiche le message de félicitations si toutes les réponses sont correctes */}
      {score === totalQuestions && (
        <p className="text-3xl text-green-600 font-bold mb-6 animate-bounce">
          Félicitations 🎉 ! Vous avez répondu correctement à toutes les questions !
        </p>
      )}

      <button
        onClick={onRestart}
        className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-700 transition duration-300 animate-fade-in"
      >
        Rejouer
      </button>
    </div>
  );
}

export default Result;
