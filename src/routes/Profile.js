import React from 'react';
import authService from 'fbase';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () =>
    signOut(authService).then(() => {
      navigate('/', { replace: true });
    });
  return (
    <>
      <span>Profile</span>
      <button onClick={onLogOutClick}>
        <Link to="/">Log-Out</Link>
      </button>
    </>
  );
};
export default Profile;
