import React, { useState, useEffect } from 'react';
import { getTopics } from '../services/quizService';
import { Link } from 'react-router-dom';

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const fetchedTopics = await getTopics();
      setTopics(fetchedTopics);
    };

    fetchTopics();
  }, []);

  return (
    <div className="topic-list">
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link to={`/topics/${topic.id}`}>
              <h3>{topic.name}</h3>
            </Link>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Topics;