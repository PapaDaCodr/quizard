import React from 'react';
import '../styles/UserInfo.css';

function UserInfo() {
  return (
    <div className="user-info">
      <div className="unlock-leaderboards">
        <h3>Unlock Leaderboards!</h3>
        <p>Complete 10 more lessons to start competing</p>
      </div>
      <div className="daily-quests">
        <h3>Daily Quests</h3>
        <div className="quest">
          <span className="quest-icon">⚡</span>
          <span className="quest-text">Earn 10 XP</span>
          <div className="quest-progress">0 / 10</div>
        </div>
      </div>
      <div className="create-profile">
        <h3>Create a profile to save your progress!</h3>
        <button className="create-profile-btn animated-button">CREATE A PROFILE</button>
        <button className="sign-in-btn">SIGN IN</button>
      </div>
    </div>
  );
}

export default UserInfo;