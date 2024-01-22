import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Main from './Main';
import Aboutme from './Aboutme';
import Courses from './Courses';
import Projects from './Projects';
import Footer from './Footer';
import Experience from './Experience';

function Portfolio(){
  return(
    <div>
      <Navbar/>
      <Main/>
      <Aboutme/>
      <Experience/>
      <Projects/>
      <Courses/>   

      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Portfolio/>
);
