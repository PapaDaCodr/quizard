import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopics, getUnitsForTopic } from '../services/quizService';
import TopicsList from '../styles/TopicsList.css';

function TopicList() {
  const [topics, setTopics] = useState([]);
  const [units, setUnits] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        const fetchedTopics = await getTopics();
        setTopics(fetchedTopics);
        
        const unitsObj = {};
        for (const topic of fetchedTopics) {
          const topicUnits = await getUnitsForTopic(topic.id);
          unitsObj[topic.id] = topicUnits;
        }
        setUnits(unitsObj);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching topics and units:', error);
        setError('Failed to load topics. Please try again later.');
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  if (loading) {
    return <div>Loading topics...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (topics.length === 0) {
    return <div>No topics available. Please check back later.</div>;
  }

  return (
    <div className="topic-list">
      <h2>Quiz Topics</h2>
      {topics.map((topic) => (
        <div key={topic.id} className="topic-item">
          <h3>{topic.name}</h3>
          <p>{topic.description}</p>
          <h4>Units:</h4>
          <ul>
            {units[topic.id] && units[topic.id].map((unit) => (
              <li key={unit.id}>
                <Link to={`/quiz/${unit.id}`}>{unit.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TopicList;