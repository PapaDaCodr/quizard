import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionsForUnit } from '../services/quizService';
import { getCurrentUser } from '../services/authServices';
import { updateProgress } from '../services/progressService';

function Quiz() {
  const { topicId, unitId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await getQuestionsForUnit(unitId);
      setQuestions(fetchedQuestions);
    };

    fetchQuestions();
  }, [unitId]);

  useEffect(() => {
    const user = getCurrentUser(); // Get the current user from authServices
    if (user) {
      setUserId(user.uid);
    }
  }, []);

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed, update progress
      updateProgress(userId, topicId, unitId, score);
    }
  };

  return (
    <div className="quiz">
      <h2>Quiz for {unitId}</h2>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{questions[currentQuestionIndex].questionText}</h3>
          <ul>
            {questions[currentQuestionIndex].answerOptions.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(index)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Quiz Completed!</h3>
          <p>Your score: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;