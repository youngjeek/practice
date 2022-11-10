import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import authService from 'fbase';
function App() {
  const [Initialized, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {Initialized ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing...'}
      <footer>
        Copyright &copy; {new Date().getFullYear()} Cnfidentilly. All rights
        reserved
      </footer>
    </>
  );
}
export default App;
