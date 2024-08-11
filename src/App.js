import './App.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Component/Navigation';
import CenterPage from './Component/CenterPage';
import Hints from './Component/Hints';
import Leaderboard from './Component/Leaderboard';
import Questions from './Component/Questions';
import Footer from './Component/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map(user=> 
          <p>{user}</p>
        )
      )}
      <Navigation />
      <CenterPage />
      <Hints />
      <Leaderboard />
      <Questions />
      <Footer />
    </>
  );
}

export default App;