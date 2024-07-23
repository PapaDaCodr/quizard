import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionsForUnit } from '../services/quizService';
import { updateProgress } from '../services/progressService';


function Quiz() {
  const { unitId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchedQuestions = await getQuestionsForUnit(unitId);
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
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
    // For now, we'll just alert the score
    // In a real app, we'd use the actual user ID and topic ID
    alert(`Quiz finished! Your score: ${score}/${questions.length}`);
    // await updateProgress('userId', 'topicId', unitId, score);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Quiz</h2>
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