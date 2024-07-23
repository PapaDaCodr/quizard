import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TopicList from './components/TopicList';
import Quiz from './components/Quiz';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/topics" element={<TopicList />} />
          <Route path="/quiz/:unitId" element={<Quiz />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Welcome to ICT Quiz App!</h2>;
// }

export default App;