import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Question from "./components/Question";
import ScoreDisplay from "./components/ScoreDisplay";
import Home from "./components/Home";

const questions = [
  {
    id: 1,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
  },
  {
    id: 2,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Vietnam"],
    answer: "Japan",
  },
  {
    id: 3,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au",
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    id: 5,
    question: "Which language is used to build web pages?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML",
  },
  {
    id: 6,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    id: 7,
    question: "Which gas do plants absorb that humans exhale?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    id: 8,
    question: "Who is known as the father of computer science?",
    options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Tim Berners-Lee"],
    answer: "Alan Turing",
  },
  {
    id: 9,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    id: 10,
    question: "Which famous physicist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Stephen Hawking",
      "Galileo Galilei",
    ],
    answer: "Albert Einstein",
  },
];

const App = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const lastQuestion = questions.length - 1;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {questions.map((question) => (
            <Route
              key={question.id}
              path={`/question${question.id}`}
              element={
                <Question
                  question={question.question}
                  options={question.options}
                  answer={question.answer}
                  handleAnswer={handleAnswer}
                  lastQuestion={lastQuestion}
                  onNext={handleNext}
                  currentQuestion={currentQuestion}
                />
              }
            />
          ))}
          <Route path="/result" element={<ScoreDisplay score={score} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
