import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers';
import SwiperComponent from './components/SwiperComponent';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage';
import UseJQueryEvents from './js/UseJQueryEvents';

function App() {
  // 각 섹션의 ref 생성
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const certificateRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const careerRef = useRef<HTMLDivElement | null>(null);

  UseJQueryEvents();
  
  return (
    <div id='wrapper'>
      <Headers
        aboutMeRef={aboutMeRef}
        skillsRef={skillsRef}
        certificateRef={certificateRef}
        projectsRef={projectsRef}
        careerRef={careerRef} />
      <Mainpage
        aboutMeRef={aboutMeRef}
        skillsRef={skillsRef}
        certificateRef={certificateRef}
        projectsRef={projectsRef}
        careerRef={careerRef} />
      <Footer />
    </div>
  );
}

export default App;
