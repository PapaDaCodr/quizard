import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBarMenu.css';

function SidebarMenu() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">QUIZARD</h1>
      <nav className="sidebar-menu">
        <Link to="/"><button>Home</button></Link>
        <Link to="/topics"><button>Topics</button></Link>
        <Link to="/leaderboard"><button>Leaderboard</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
        <Link to="/signin"><button>Sign In</button></Link>
      </nav>
    </div>
  );
}

export default SidebarMenu;