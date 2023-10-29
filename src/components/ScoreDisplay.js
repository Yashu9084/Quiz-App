import React from "react";

const ScoreDisplay = ({ score }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-200 to-blue-200">
      <div className="w-4/5 bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Quiz Completed!
        </h2>
        <p className="text-xl text-purple-600">Your Score: {score}</p>
      </div>
    </div>
  );
};

export default ScoreDisplay;
