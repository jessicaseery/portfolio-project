import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Header from './Header';
import Projects from './Projects';
import Homepage from './Homepage';
import CurriculumVitae from './CurriculumVitae';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/AboutMe" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/cv" element ={<CurriculumVitae/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
  );
}

export default App;
