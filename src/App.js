import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNav from './components/Navbar';
import { About, Error, Home, Portfolio } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
