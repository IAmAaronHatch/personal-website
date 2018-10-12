import React, { Component } from 'react';
import homePage from '../assets/KWIZZ.png';
import SilverP1 from '../assets/SilverP1.jpg'
import {Link} from 'react-router-dom';

const styles = {
    textDecoration: 'none !important',
    color: 'white'
}

export default class  extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Silver Platter</h1>
                    <p className='text about' id='project-info'>Currently working on a Silver Platter. Users will be able to log in, find their location, and search for five randomized local eateries near them. I wanted to challenge myself to learn and work with mapping through esri.<br /><br />
                    <a style={styles}href='https://github.com/IAmAaronHatch/foodServiceGP'>Github Repo</a>
                <br/>
                <br/><a href='https://silverplatter.aaronharrisinfo.com' style={styles}>Silver Platter Live Site</a></p>
                   <img className='project-preview' src={SilverP1} alt='home page' />
                   <p className='text about' >Technologies used: React, Redux, Node, Express, Esri, Massive, Auth0, Jest</p>
                   <Link to='/' className='text'>Home</Link>
                </div> 
            </div> 
        )
    }
}