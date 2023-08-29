import './App.css';
import React, {useState} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Header from './Header';
import Projects from './Projects';
import Homepage from './Homepage';
import CurriculumVitae from './CurriculumVitae';
import Contact from './Contact';
import {programmingLanguages, projects} from './data'



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Router>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Routes>
          <Route path="/" element={<Homepage isDarkMode={isDarkMode} />}/>
          <Route path="/AboutMe" element={<AboutMe isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<Projects data={projects} isDarkMode={isDarkMode}/>} />
          <Route path="/cv" element ={<CurriculumVitae data={programmingLanguages} isDarkMode={isDarkMode}/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
  );
}

export default App;
