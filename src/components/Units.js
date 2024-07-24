import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUnitsForTopic } from '../services/quizService';
import { Link } from 'react-router-dom';

function Units() {
  const { topicId } = useParams();
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const fetchUnits = async () => {
      const fetchedUnits = await getUnitsForTopic(topicId);
      setUnits(fetchedUnits);
    };

    fetchUnits();
  }, [topicId]);

  return (
    <div className="unit-list">
      <h2>Units for {topicId}</h2>
      <ul>
        {units.map((unit) => (
          <li key={unit.id}>
            <Link to={`/topics/${topicId}/units/${unit.id}`}>
              <h3>{unit.name}</h3>
            </Link>
            <p>{unit.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Units;