import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Dashboard from './components/Dashboard';
import Main from './views/Main';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import TechSkills from './components/TechSkills';
import Education from './components/Education'
import WorkRecord from './components/WorkRecord';
import KSDemo from './components/KSDemo';
import ASDemo from './components/ASDemo';
import MTTDemo from './components/MTTDemo';
import ErsDemo from './components/ErsDemo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Main/>}default/>
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/AboutMe' element={<AboutMe/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/TechSkills' element={<TechSkills/>} />
          <Route path='/Education' element={<Education/>} />
          <Route path='/WorkRecord' element={<WorkRecord/>} />
          <Route path='/KSDemo' element={<KSDemo/>} />
          <Route path='/ASDemo' element={<ASDemo/>} />
          <Route path='/MTTDemo' element={<MTTDemo/>} />
          <Route path='/ErsDemo' element={<ErsDemo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;