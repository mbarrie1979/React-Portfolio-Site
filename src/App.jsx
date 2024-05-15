// import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/About Me';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Potfolio';
import Footer from './components/Footer';


function App() {


  return (
    <Router>
      <div className='container-fluid vw-100 vh-100'>
        <header className='row header' id='header'>
          <Header />
        </header>
        <main className='main'>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className='row footer'>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App
