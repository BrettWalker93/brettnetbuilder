import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to brettnetbuilder</h1>
      <p>Click the button below to start building your neural network architecture.</p>
      <Link to="/brettnetbuilder">
      <button>Go to builder</button>
      </Link>
    </div>
  );
};

export default HomePage;