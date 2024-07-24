import React from 'react';
import { signInWithGoogle } from '../services/authServices';
// import {useHistory, } from 'react-router-dom';

function SignIn() {
  // const history = useHistory();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      // history.push('/profile');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;