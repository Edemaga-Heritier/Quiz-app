

function Quiz({ question, options, handleAnswer }) {
  return (
    <div className="quiz  shadow-xl rounded-lg p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black-800">{question}</h2>
      <div className="flex flex-col space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
