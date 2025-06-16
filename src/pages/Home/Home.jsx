import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1 style={{color: 'white', fontSize: '3rem', textAlign: 'center', marginTop: '100px'}}>
        KEVBARROZ FUNCIONANDO! 🔥
      </h1>
      <p style={{color: 'white', textAlign: 'center', fontSize: '1.5rem'}}>
        Se você está vendo isso, o React está funcionando!
      </p>
    </div>
  );
};

export default Home;