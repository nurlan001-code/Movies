import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Header from './components/Header';
import MovieRecommender from './pages/MovieRecommender/MovieRecommender';


function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<MovieRecommender />} />
       
        
        
      </Routes>
    </Router>
  );
}

export default App;
