import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#efd9b4', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', color: '#292522', width: '70%' }}>
        <h1 style={{ fontSize: '36px' }}>Welcome to our Health App</h1>
        <p style={{ fontSize: '18px' }}>Our mission is to help you track your progress and maintain a healthy lifestyle through a fun and interactive experience. With our app, you can watch your pet get healthier as you progress in your exercises and food choices.</p>
      </div>
    </div>
  );
};

export default Home;
