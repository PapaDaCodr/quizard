// Home.js
import React, { useState, useEffect } from 'react';
import SidebarMenu from './SideBarMenu';
import TopicList from './Topics';
import UserInfo from './UserInfo';
import SignInPrompt from './SignInPrompt';
import { getCurrentUser } from '../services/authServices';
import '../styles/Homepage.css';

function Home() {
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

  useEffect(() => {
    const checkUserSignIn = setTimeout(() => {
      const user = getCurrentUser();
      if (!user) {
        setShowSignInPrompt(true);
      }
    }, 15000);

    return () => clearTimeout(checkUserSignIn);
  }, []);

  return (
    <div className="home-container">
      <SidebarMenu />
      <div className="main-content">
        <TopicList />
      </div>
      <div className="right-sidebar">
        <UserInfo />
      </div>
      {showSignInPrompt && (
        <SignInPrompt onClose={() => setShowSignInPrompt(false)} />
      )}
    </div>
  );
}

export default Home;