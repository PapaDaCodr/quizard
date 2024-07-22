import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getTopics = async () => {
  const topicsRef = collection(db, 'topics');
  const snapshot = await getDocs(topicsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getUnitsForTopic = async (topicId) => {
  const unitsRef = collection(db, 'units');
  const q = query(unitsRef, where('topicId', '==', topicId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getQuestionsForUnit = async (unitId) => {
  const questionsRef = collection(db, 'questions');
  const q = query(questionsRef, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};