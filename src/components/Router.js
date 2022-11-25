import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from 'components/Navigation';

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route
              exact
              path="/profile"
              element={<Profile userObj={userObj} />}
            ></Route>
            <Route exact path="/" element={<Home userObj={userObj} />}></Route>
          </>
        ) : (
          <Route exact path="/" element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  );
};
//  <Route path="*" element={<Navigate replace to="/home" />} />
export default AppRouter;
