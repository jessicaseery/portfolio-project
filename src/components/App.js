import './App.css';
import React, {useState} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Header from './Header';
import Projects from './Projects';
import Homepage from './Homepage';
import CurriculumVitae from './CurriculumVitae';
import Contact from './Contact';
import {floweroptions, staroptions, programmingLanguages, projects} from './data'



const App = () => {
  const [isdarkmode, setisdarkmode] = useState('false');

  const toggleDarkMode = () => {
    setisdarkmode(isdarkmode === 'false' ? 'true' : 'false'); 
  };
  return (
    <Router>
      <Header isdarkmode={isdarkmode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Homepage flowers={floweroptions} stars={staroptions} isdarkmode={isdarkmode} />}/>
          <Route path="/AboutMe" element={<AboutMe isdarkmode={isdarkmode} />} />
          <Route path="/projects" element={<Projects data={projects} isdarkmode={isdarkmode}/>} />
          <Route path="/cv" element ={<CurriculumVitae data={programmingLanguages} isdarkmode={isdarkmode}/>}/>
          <Route path="/contact" element={<Contact isdarkmode={isdarkmode} />}/>
        </Routes>
      </Router>
  );
}

export default App;
