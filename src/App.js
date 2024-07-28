import './App.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Component/Navigation';
import CenterPage from './Component/CenterPage';
import Hints from './Component/Hints';
import Leaderboard from './Component/Leaderboard';
import Questions from './Component/Questions';
import Footer from './Component/Footer';

function App() {
  return (
    <>
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