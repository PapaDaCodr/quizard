// src/services/authServices.js
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const signInWithApple = async () => {
  try {
    const result = await signInWithPopup(auth, appleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Apple:', error);
    throw error;
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};