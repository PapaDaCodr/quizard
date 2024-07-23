import React, { useState } from 'react';
import { signIn, signInWithGoogle } from '../services/authServices';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      alert('Sign in successful!');
    } catch (error) {
      alert('Error signing in: ' + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert('Google sign in successful!');
    } catch (error) {
      alert('Error signing in with Google: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;