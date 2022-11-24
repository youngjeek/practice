import authService from 'fbase';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React, { useState } from 'react';

//export default () => <span>Auth</span>;  자동import하기
const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');
  // const [form, setForm] = useState({ email: "", password: "" });
  // const onChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    console.log('입력' + event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        //create New Account
        await createUserWithEmailAndPassword(authService, email, password);
      } else {
        //Log In
        await signInWithEmailAndPassword(authService, email, password);
      }
    } catch (error) {
      setError(error.code + ':' + error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  //Social login option
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="email"
          required
          onChange={onChange}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          minLength={6}
          required
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? 'Create' : 'Log-In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? 'Log-In' : 'Create'}</span>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with gitHub
        </button>
      </div>
    </div>
  );
};
export default Auth;
