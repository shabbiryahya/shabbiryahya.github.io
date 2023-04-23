import React from 'react';
import './Experience.css';
import css3 from '../../assests/css3.png';
import html from '../../assests/html-5.png';
import js from '../../assests/javascript.png';
import react from '../../assests/react.png';
import bs from '../../assests/bootstrap.png';
import express from "../../assests/express.png"
import mongoose from "../../assests/mongoose.png"
import mongodb from "../../assests/mongodb.png"
// import three from '../../assests/threejs.png';
import node from '../../assests/node.jpg';
// import postgr from '../../assests/postgresql.png';
// import python from '../../assests/python.png';
// import rails from '../../assests/rails.png';
// import ruby from '../../assests/ruby.png';



function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={react}
                className="experience_details-icon"
                alt="react"
              />
              <div>
                <h4>REACT & REDUX</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={bs} className="experience_details-icon" alt="bs" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg"
                className="experience_details-icon"
                alt="chakraUI"
              />
              <div>
                <h4>Chakra UI</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend" style={{marginTop:50}}>
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img
                src={mongodb}
                className="experience_details-icon"
                alt="mongodb"
              />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={express} className="experience_details-icon" alt="express" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={mongoose}
                className="experience_details-icon"
                alt="mongoose"
              />
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={node}
                className="experience_details-icon"
                alt="node"
              />
              <div>
                <h4>Noje.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
