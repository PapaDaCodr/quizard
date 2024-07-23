import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser} from '../services/authServices';
import Homepage from '../styles/Homepage.css';


function Home() {
  const user = getCurrentUser();

  return (
    <div className="home-container">
      <h1>Welcome to Quizard</h1>
      {user && <h2>Hello, {user.displayName || user.email}!</h2>}
      <p>Test your knowledge and improve your skills with our interactive quizzes.</p>
      <div className="quick-links">
        <h3>Quick Start:</h3>
        <Link to="/topics" className="btn btn-primary">Browse Topics</Link>
        <Link to="/leaderboard" className="btn btn-secondary">View Leaderboard</Link>
      </div>
      <div className="features">
        <h3>Features:</h3>
        <ul>
          <li>Multiple topics to choose from</li>
          <li>Track your progress and earn XP</li>
          <li>Compete with others on the leaderboard</li>
          <li>Unlock achievements as you improve</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;