import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Header from './components/Header';
import MovieRecommender from './pages/MovieRecommender/MovieRecommender';
import Register from './pages/Register/Register';


function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<MovieRecommender />} />
        <Route path="/Register" element={<Register />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
