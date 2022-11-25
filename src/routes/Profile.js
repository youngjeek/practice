import React from 'react';
import authService from 'fbase';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile';

const Profile = ({ userObj }) => {
  const navigate = useNavigate();
  const onLogOutClick = () =>
    signOut(authService).then(() => {
      navigate('/', { replace: true });
    });
  return (
    <>
      <span>Profile</span>
      <EditProfile userObj={userObj} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={onLogOutClick}>
        <Link to="/">Log-Out</Link>
      </button>
    </>
  );
};
export default Profile;
