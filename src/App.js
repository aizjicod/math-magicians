import React from 'react';
import './components/app.modules.css';
import { Routes, Route, Link } from 'react-router-dom';
import CalculatorPage from './pages/calculatorPage';
import Home from './pages/home';
import Quotes from './pages/quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <h1>Math Magicians</h1>
          <ul className="navul">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/Calculator">Calculator</Link>
            <Link className="links" to="/Quotes">Quotes</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Calculator" element={<CalculatorPage />} />
          <Route path="Quotes" element={<Quotes />} />
        </Routes>
      </>
    );
  }
}

export default App;
