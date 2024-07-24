import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../services/authServices';

function SignInPrompt({ onClose }) {
    const navigate = useNavigate();
  
    const handleSignIn = async (signInMethod) => {
      try {
        await signInMethod();
        onClose(); // Close the prompt
        navigate('/'); // Redirect to home page
      } catch (error) {
        console.error('Error signing in:', error);
        // Handle error, e.g., display an error message
      }
    };
  
    return (
      <div className="sign-in-prompt">
        <h2>Sign In or Sign Up</h2>
        <button onClick={() => handleSignIn(signInWithGoogle)}>
          Sign in with Google
        </button>
        
        <button onClick={onClose}>Close</button>
      </div>
    );
  }

  export default SignInPrompt;