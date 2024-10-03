import  { useState, useEffect } from "react";
import Quiz from "./component/Quiz";
import Result from "./component/Result";
import questions from "./component/data/question.json"; // Importation dynamique des questions

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // Chronomètre de 10 secondes

  // Réinitialise le temps lorsque l'index de la question change

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup à chaque changement de question
  }, [timeLeft]);

  // Gestion de la réponse de l'utilisateur
  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setTimeLeft(10); // Réinitialise le chronomètre
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  // Fonction pour rejouer

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setTimeLeft(10);
  };

  return (
    <div className="App p-5">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} onRestart={handleRestart} />
      ) : (
        <div>
          <div className="timer text-center mb-4 text-2xl">
            Temps restant: {timeLeft} secondes
          </div>
          <Quiz
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
}

export default App;

