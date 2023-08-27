import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Header from './Header';
import Projects from './Projects';
import Homepage from './Homepage';
import CurriculumVitae from './CurriculumVitae';
import Contact from './Contact';
import {programmingLanguages, projects} from './data'

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/AboutMe" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects data={projects}/>} />
          <Route path="/cv" element ={<CurriculumVitae data={programmingLanguages}/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
  );
}

export default App;
