import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Error from './pages/Error';

import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />

        </Routes>

      </Router>


    </div>
  );
}

export default App;
