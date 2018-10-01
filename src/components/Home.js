import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'
import '../reset.css';
import github from '../assets/github-transparent.png';
import linkedin from '../assets/Linkedin-transparent.png';
import r from '../assets/R.png';
import rd from '../assets/RD.png';
import pg from '../assets/PG.png';
import node from '../assets/nodejs-512.png';
import js from '../assets/JS.png';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import aaron from '../assets/personalPic.jpeg';

class Home extends Component {
  constructor() {
    super();
    
  }
  handleScrollToElement(e) {
    const tesNode = ReactDOM.findDOMNode(this.refs[e])
    window.scrollTo({ top: tesNode.offsetTop, behavior: 'smooth' });
  }
  
  render() {
    return (
      <div className="App">
        <nav className='nav'>
          <p className='nav-option text' onClick={() => this.handleScrollToElement('home')}>Home</p>
          <p className='nav-option text' onClick={() => this.handleScrollToElement('skills')}>Skills</p>
          <p className='nav-option text' onClick={() => this.handleScrollToElement('projects') }>Projects</p>
          <p className='nav-option text' onClick={() => this.handleScrollToElement('contact')}>Contact</p>
        </nav>


        <div className='section' id='home' ref='home'>
          <h1 className='label text' id='ch'>ah.</h1>
          <p className='text charles' >DAVID AARON HATCH</p>
          <p className='title text' >WEB DEVELOPER</p>
          <div className='intro'>
            <p className='text about'>Hi, My name is Aaron Hatch. I'm a Web Developer with a passion for Design, and the drive to learn new things. I want the opportunity to expand my knowledge through development.
            <br/>
            <br/>
             I love to solve puzzles. I believe working through and solving problems is one of the most rewarding feelings.  When I'm not coding, I enjoy travelling, filming, drawing, painting, and spending time with people I am close with. I love to create. 
             <br/>
            <br/>
             I'm always looking for another project to throw myself into and would love to work and learn with you. </p>
          </div>
        </div>
        <div className='section' id='skills' ref='skills'>
          <h1 className='label text skills'>skills.</h1>
          <div className='image-container'>
            <img src={html} alt='' className='skill-icon' />
            <img src={css} alt='' className='skill-icon' />
            <img src={js} alt='' className='skill-icon' />
            <img src={r} alt='' className='skill-icon' />
            <img src={rd} alt='' className='skill-icon' />
            <img src={node} alt='' className='skill-icon' />
            <img src={pg} alt='' className='skill-icon' />
            

            <p className='text skillz'>HTML   |  CSS   |  JAVASCRIPT   |  REACT   |  REDUX   |  NODEJS   |  POSTGRESQL  </p>
          </div>

        </div>
        <div className='section' id='projects' ref='projects'>
        <h1 className='label text'>projects</h1>
        <nav className='project-container'>
            <Link to='/studio'>
            <div className='project text'>Threddit</div> 
            </Link>
            <Link to='/kwizz'>
            <div className='project text'>Silver Platter</div> 
            </Link>
        </nav> 
        </div> 

        <div className='section' id='contact' ref='contact'>
          <h1 className='label text' id='contact-word'>contact</h1>
          <img className='pic-me' src={aaron} alt='charles' />

          <div className='contact-info'>

            <a className='contact-link' href='https://www.linkedin.com/in/davidaaronhatch/' target='_blank' rel="noopener noreferrer">
              <img className='footer-img' src={linkedin} alt='Linkedin' height='40px' />
            </a>

            <a className='contact-link' href='https://github.com/IAmAaronHatch' target='_blank' rel="noopener noreferrer">
              <img className='footer-img' src={github} alt='Github' height='40px' />
            </a>
            <p className='text' id='email'>aaronhatch1218@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;