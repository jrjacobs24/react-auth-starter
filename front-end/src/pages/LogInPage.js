import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate = useNavigate();
  const onLogInClick = async () => {
    alert('log in not implemented yet');
  }

  return (
    <div className="content-container">
      <h1>Log In</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input type="text" value={emailValue} onChange={e => setEmailValue(e.target.value)} placeholder="someone@gmail.com" />
      <input type="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} placeholder="password" />

      <button disabled={!emailValue || !passwordValue} onClick={onLogInClick}>Log In</button>
      <button onClick={() => navigate('/forgot-password')}>Forgot your password?</button>
      <button onClick={() => navigate('/signup')}>Don't have an account? Sign Up</button>
    </div>
  );
};
