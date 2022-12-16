import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const navigate = useNavigate();
  const onSignUpClick = async () => {
    alert('sign up not implemented yet');
  }

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input type="text" value={emailValue} onChange={e => setEmailValue(e.target.value)} placeholder="someone@gmail.com" />
      <input type="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} placeholder="password" />
      <input type="password" value={confirmPasswordValue} onChange={e => setConfirmPasswordValue(e.target.value)} placeholder="confirm password" />

      <hr />
      <button disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue} onClick={onSignUpClick}>Sign Up</button>
      <button onClick={() => navigate('/login')}>Already have an account? Log In</button>
    </div>
  );
};
