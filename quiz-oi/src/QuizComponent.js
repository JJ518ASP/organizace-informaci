import React from 'react';
import Quiz from 'react-quiz-component'; // Import the quiz component

const quizData = {
    quizTitle: "Test Your Knowledge",
    quizSynopsis: "Answer the following questions:",
    questions: [
        {
            question: "Jaký je účel vztahu ekvivalence v tezauru?",
            questionType: "text",
            answerSelectionType: "single",
            answers: {
                a: "Zajišťuje synonymní vazby mezi deskriptory.",
                b: "Propojuje obecné a specifické deskriptory.",
                c: "Definuje vztahy mezi dvěma mikrotezaury.",
                d: "Představuje lexikální jednotku nahrazující deskriptor."
            },
            correctAnswer: "a",
            explanation: {
                b: "Tento vztah odpovídá hierarchii, nikoli ekvivalenci.",
                c: "Mikrotezaury nejsou spojovány vztahem ekvivalence.",
                d: "Ekvivalence odkazuje na deskriptor, ne jej nahrazuje."
            }
        }
    ]
};

function QuizComponent() {
    return (
        <div>
            <Quiz quiz={quizData} />
        </div>
    );
}

export default QuizComponent;
