
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
              path="cburton-portfolio/"
              element={<About />}
            />

            <Route
              path="cburton-portfolio/"
              element={<About />}
            />
 
            <Route
              path="cburton-portfolio/resume"
              element={<Resume />}
            />

            <Route
              path="cburton-portfolio/contact"
              element={<ContactForm />}
            />
            
            <Route
              path="cburton-portfolio/portfolio"
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
