import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h2>Looks like this outfit is out of stock.</h2>
        

      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;