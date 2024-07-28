import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data from local storage or any other storage mechanism
    localStorage.removeItem('userToken'); // Adjust according to your storage key
    localStorage.removeItem('userName'); // Adjust according to your storage key

    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
