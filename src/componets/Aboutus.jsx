import React from 'react';
import '../App.css';
import img1 from './image/img1.jpg'
import img2 from './image/img2.jpeg'


export default function Aboutus() {
  return (
    <div className='about-section'>
      <div id="about">
    <h1>About Us</h1>
    <h3>Let us Know who we are</h3>
  </div>
   
  <section className='container' >


    <div class="about-pg-boxes container-fluid">
      <div className="row">

        <div className="about-pg-pic col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img className='about2' src={img1}   alt=""/>
        </div>

        <div className="about-pg-details first-txt col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <section>
    <div className="contact-hd container about-hd">
      <h1>What is Coding Club ? 
      </h1>
    </div>
  </section>
          <p>A coding club is a community of individuals who share an interest in coding and come together to learn and improve their coding skills. Our coding club provides a supportive and collaborative environment where members can work on coding projects, share resources and knowledge, and attend coding-related events. Our goal is to help members develop their coding skills, build a strong network of like-minded individuals, and have fun while doing it.</p>
        </div>
      </div>
    </div>
  </section>


  <section className='container'>
    <div className="about-pg-boxes2 container-fluid">
      <div className="row">

        <div className="about-pg-details col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="contact-hd container about-hd">
      <h1>How this club helps you in our professional Development?
      </h1>
    </div>
          <p>
          Being part of a coding club has numerous benefits for professional development, including the chance to learn new coding skills and work on projects with others to gain exposure to new technologies and techniques. Joining a coding club can also create a network of like-minded individuals with whom you can collaborate and advance your career. Working on coding projects with others can help you develop valuable collaboration skills, such as effective communication and project management, that are essential in the workplace. Additionally, coding clubs often provide access to resources like coding tutorials, books, and online courses that can further develop your skills. Building a portfolio of work through coding projects in a club can showcase your skills and experience, which is valuable when seeking career advancement opportunities. Ultimately, being part of a coding club can foster growth, learning, and connections within the field, advancing professional development.
            </p>
        </div>

        <div className="about-pg-pic col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        
        
          <img className="about2" src={img2} alt=""/>
        </div>
      </div>
    </div>
  </section>
    </div>
    
  )
}


