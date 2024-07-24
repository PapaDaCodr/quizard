import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarMenu from './components/SideBarMenu';
import Home from './components/Home';
import Topics from './components/Topics';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import PrivateRoute from './PrivateRoute';
import Units from './components/Units';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <SidebarMenu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topicId" element={<Units />} />
            <Route path="/topics/:topicId/units/:unitId" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;