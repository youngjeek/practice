import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div>
        <i>icon</i>
        <span>Welcome confidentil Tally</span>
        <i>profile</i>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">My page</Link>
        </li>
      </ul>
      <div>
        <i>icon</i>
        <span>Log-out</span>
      </div>
    </nav>
  );
};
export default Navigation;
