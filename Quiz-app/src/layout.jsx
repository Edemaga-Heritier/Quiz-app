import { useState, useEffect } from "react";
import Quiz from "./component/Quiz";
import Result from "./component/Result";
import questions from "./component/data/question.json";
import './App.css'; // Ensure we import the stylesheet for animation



export default function layout() {

    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
  
    useEffect(() => {
      if (timeLeft === 0) {
        handleNextQuestion();
      }
  
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);


      return () => clearInterval(timer);
    }, [timeLeft]);
  
    const handleAnswer = (selectedOption) => {
      if (selectedOption === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      handleNextQuestion();
    };
  
    const handleNextQuestion = () => {
      setTimeLeft(10);
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowResult(true);
      }
    };
  
    const handleRestart = () => {
      setScore(0);
      setCurrentQuestionIndex(0);
      setShowResult(false);
      setTimeLeft(10);
    };
  

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-100">
    {showResult ? (
      <Result score={score} totalQuestions={questions.length} onRestart={handleRestart} />
    ) : (
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-lg text-center">
        <div className={`timer mb-6 text-2xl ${timeLeft <= 5 ? 'warning' : 'normal'}`}>
          Temps restant: <span className="font-bold">{timeLeft}</span> secondes
        </div>
        <Quiz
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          handleAnswer={handleAnswer}
        />
      </div>
    )}
  </div>
  )
}
