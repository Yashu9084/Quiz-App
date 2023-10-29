import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Question = ({
  question,
  options,
  answer,
  handleAnswer,
  lastQuestion,
  onNext,
  currentQuestion,
}) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const handleOptionSelect = (option) => {
    setSelected(option);
    handleAnswer(option === answer);
  };
  const goToNextQuestion = () => {
    if (lastQuestion !== currentQuestion) {
      onNext();
      navigate(
        `../question${parseInt(window.location.pathname.match(/\d+/)[0]) + 1}`
      );
    }
  };
  const submitHandler = () => {
    navigate("/result");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-200 to-yellow-200">
      <div className="w-4/5 bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-4 text-center text-purple-600">
          {question}
        </h3>
        <ul>
          {options.map((option) => (
            <li key={option}>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selected === option}
                  onChange={() => handleOptionSelect(option)}
                  className="text-purple-600 focus:ring-purple-300"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            </li>
          ))}
        </ul>
        {lastQuestion !== currentQuestion ? (
          <button
            onClick={goToNextQuestion}
            className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-700"
          >
            Next
          </button>
        ) : (
          <button
            onClick={submitHandler}
            className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-700"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
