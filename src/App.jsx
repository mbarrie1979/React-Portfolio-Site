// import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/About Me';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Potfolio';


function App() {


  return (
    <Router>
      <div className='container vw-100 vh-100'>
        <header className='row' id='header'>
          <Header />
        </header>
        <main className='row main'>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className='row'>

        </footer>
      </div>
    </Router>
  )
}

export default App
