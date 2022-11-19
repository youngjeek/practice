import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import authService from 'fbase';
function App() {
  const [Initialized, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {Initialized ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        'Initializing...'
      )}
      <footer>
        Copyright &copy; {new Date().getFullYear()} Cnfidentilly. All rights
        reserved
      </footer>
    </>
  );
}
export default App;
