import React, { useState, useEffect } from 'react';
import { getQuestionsForUnit } from '../services/quizService';
import { updateProgress } from '../services/progressService';

function Quiz({ unitId, userId, topicId, onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await getQuestionsForUnit(unitId);
      setQuestions(fetchedQuestions);
    };
    fetchQuestions();
  }, [unitId]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    await updateProgress(userId, topicId, unitId, score);
    onComplete(score);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h3>Question {currentQuestionIndex + 1}</h3>
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;