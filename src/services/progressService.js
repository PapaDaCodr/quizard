import { db } from './firebase';
import { doc, setDoc, getDoc, updateDoc, increment } from 'firebase/firestore';

export const updateProgress = async (userId, topicId, unitId, score) => {
  const progressRef = doc(db, 'userProgress', userId, 'topics', topicId, 'units', unitId);
  
  await setDoc(progressRef, {
    completed: true,
    score: score
  }, { merge: true });

  // Update user XP
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    xp: increment(score)
  });

  // Check and update level if necessary
  const userDoc = await getDoc(userRef);
  const userData = userDoc.data();
  const newLevel = Math.floor(userData.xp / 100) + 1; // Simple level calculation

  if (newLevel > userData.level) {
    await updateDoc(userRef, {
      level: newLevel
    });
  }
};

export const getProgress = async (userId, topicId, unitId) => {
  const progressRef = doc(db, 'userProgress', userId, 'topics', topicId, 'units', unitId);
  const progressDoc = await getDoc(progressRef);
  return progressDoc.exists() ? progressDoc.data() : null;
};