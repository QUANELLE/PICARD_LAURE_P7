import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Error from './pages/Error';
import Footer from './components/Footer'
import Header from './components/Header';
import About from './pages/About';
import Appart from './pages/Appart';
function App() {
  return (
    <div className="App">      
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/appart/:id' element={<Appart />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </Router>
    <Footer/>

    </div>
  );
}

export default App;
