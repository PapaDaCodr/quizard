import React, { useState, useEffect } from 'react';
import { getTopics } from '../services/quizService';

function TopicList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const fetchedTopics = await getTopics();
      setTopics(fetchedTopics);
    };
    fetchTopics();
  }, []);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopicList;