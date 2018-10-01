import React, { Component } from 'react';
import homePage from '../assets/KWIZZ.png';
import {Link} from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Silver Platter</h1>
                    <p className='text about' id='project-info'>Currently working on a Silver Platter. Users will be able to log in, find their location, and search for five randomized local eateries near them. I wanted to challenge myself to learn and work with mapping through esri.<br /><br /><a href='https://github.com/IAmAaronHatch/foodServiceGP'>Github Repo</a>
                <br/><br/><a href='https://iamaaronhatch.com'>Silver Platter Live Site</a></p>
                   <img className='project-preview' src={homePage} alt='home page' />
                   <p className='text about' >Technologies used: React, Redux, Node, Express, Esri, Massive, Auth0</p>
                   <Link to='/' className='text'>Home</Link>
                </div> 
            </div> 
        )
    }
}