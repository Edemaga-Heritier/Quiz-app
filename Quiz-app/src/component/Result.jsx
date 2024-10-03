

function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="result text-center">
      <h2 className="text-4xl font-bold mb-4">Quiz terminé !</h2>
      <p className="text-2xl">Vous avez obtenu {score} sur {totalQuestions}.</p>
      <button
        onClick={onRestart}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Rejouer
      </button>
    </div>
  );
}

export default Result;


