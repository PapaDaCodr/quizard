import { db } from '../services/firebase';
import { collection, addDoc, writeBatch } from 'firebase/firestore';
import quizData from '../data/quizData.json';

async function uploadQuizData() {
  const batch = writeBatch(db);

  try {
    for (const topic of quizData.topics) {
      // Add the topic
      const topicRef = collection(db, 'topics');
      const newTopicRef = await addDoc(topicRef, {
        name: topic.name,
        description: topic.description
      });

      console.log(`Added topic ${topic.name} with ID: ${newTopicRef.id}`);

      for (const unit of topic.units) {
        // Add the unit
        const unitRef = collection(db, 'units');
        const newUnitRef = await addDoc(unitRef, {
          topicId: newTopicRef.id,
          name: unit.name,
          description: unit.description
        });

        console.log(`Added unit ${unit.name} with ID: ${newUnitRef.id}`);

        // Add questions for this unit
        for (const question of unit.questions) {
          const questionRef = collection(db, 'questions');
          const newQuestionRef = await addDoc(questionRef, {
            unitId: newUnitRef.id,
            ...question
          });

          console.log(`Added question with ID: ${newQuestionRef.id}`);
        }
      }
    }

    // Commit the batch
    await batch.commit();
    console.log('Quiz data upload completed successfully!');
  } catch (error) {
    console.error('Error uploading quiz data:', error);
  }
}

export { uploadQuizData };