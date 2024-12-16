import React, { useState } from "react";
import questionsData from "./questions.json"; // Import the questions from the JSON file

// App component
const App = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handle answer selection
  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer
    });
  };

  // Handle navigation to the next or previous question
  const handleNext = () => {
    if (currentQuestionIndex < questionsData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Handle form submission and display explanations
  const handleSubmit = () => {
    setShowExplanations(true);
  };

  // Get the current question data
  const currentQuestion = questionsData.questions[currentQuestionIndex];

  return (
    <div>
      <h1>Organizace informací</h1>

      {/* Render current question */}
      <div>
        <h2>{currentQuestion.question}</h2>
        {/* Render the options as radio buttons */}
        <div>
          {Object.entries(currentQuestion.options).map(([key, option]) => (
            <div key={key}>
              <input
                type="radio"
                id={`${currentQuestionIndex}-${key}`}
                name={`question-${currentQuestionIndex}`}
                value={key}
                checked={selectedAnswers[currentQuestionIndex] === key}
                onChange={() => handleAnswerChange(currentQuestionIndex, key)}
              />
              <label htmlFor={`${currentQuestionIndex}-${key}`}>{option}</label>
            </div>
          ))}
        </div>

        {/* Show the explanation after the user selects an answer */}
        {showExplanations && selectedAnswers[currentQuestionIndex] && (
          <div>
            <p>
              <strong>
                Explanation:{" "}
                {
                  currentQuestion.explanations[selectedAnswers[currentQuestionIndex]] ||
                  "Správně, velmi KISK odpověď"
                }
              </strong>
            </p>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div>
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentQuestionIndex === questionsData.questions.length - 1}>
          Next
        </button>
      </div>

      {/* Submit button to reveal explanations */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
