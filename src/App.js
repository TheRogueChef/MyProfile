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
import KSDemo from './components/videos/KitchenSyncDemo.mp4';
import ASDemo from './components/videos/AudraSiteDemo.mp4';
import MTTDemo from './components/videos/TTDemo.mp4';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;