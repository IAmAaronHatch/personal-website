import React, { Component } from "react";
import Threddit1 from "../assets/Threddit1.png";
import Threddit2 from "../assets/Threddit2.png";
import Threddit3 from "../assets/thred3.png";
import { Link } from "react-router-dom";

const styles={
  textDecoration: 'none !important',
  color: 'white'
}

export default class extends Component {
  render() {
    return (
      <div className="App">
        <div className="projects-container">
          <h1 className="label text">Threddit.</h1>
          <p className="text about" id="project-info">
            Threddit.com - Personally Developed
            <br />
            <br />
            REACT | REDUX | NODE | JAVASCRIPT | POSTGRESQL | HTML | CSS | AUTH0
            <br />
            <br />I designed, created, and hosted a social media platform with roots and inspiration derived from Reddit and Tumblr. Users can create posts, view and search for these posts, and communicate with one another through chat rooms.
    
          </p>
          <p className="text about" id="project-info">
            {" "}
            <a href="https://github.com/IAmAaronHatch/personalProject" style={styles}>
              Github Repo
            </a>
            <br /> <br />
            <a href="https://threddit.iamaaronhatch.com/#/" style={styles}>
              Click here to visit the live site!
            </a>
          </p>
          <img className="project-preview" src={Threddit1} alt="home page" />
          <img className="project-preview" src={Threddit2} alt="home page" />
          <img className="project-preview" src={Threddit3} alt="home page" />
          <p className="text about" id='whiteText'>
            Technologies Used: React, Redux, Node, Express, Auth0, 
          </p>
          <Link to="/" className="text" id='whiteText'>
            Home
          </Link>
        </div>
      </div>
    );
  }
}
