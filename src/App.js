
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Resume from './pages/Resume';
import ContactForm from './pages/Contact';
import Portfolio from './pages/Portfolio';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >
      <Header>
          
      </Header>
      <div>
          <Routes>
          
            <Route
              path="/"
              element={<About />}
            />

            <Route
              path="/"
              element={<About />}
            />
 
            <Route
              path="/resume"
              element={<Resume />}
            />

            <Route
              path="/contact"
              element={<ContactForm />}
            />
            
            <Route
              path="/portfolio"
              element={<Portfolio />}
            /> 

          </Routes>
        </div>

      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
