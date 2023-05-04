import React from 'react';
import '.././App.css';
import {Link}from 'react-router-dom'
import Image1 from './image/image1.png'
import Image2 from './image/image2.jpg'
import Image3 from './image/image3.jpg'


export default function Carousel() {
  return (


    <section className='carousel_section' style={{marginTop:'15px'}} >
       <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
      aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active pickgradient">
      {/* <img src="https://source.unsplash.com/1400x400/?code,program" className="d-block w-100" alt="..."/> */}
      <img src={Image1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block  carousel_section_center ">
        <h2>Welcome to our Coding Club </h2>
        <p>WE BELIVE IN INOVATION</p>
     
        {/* <Link to='/blog' className="btn btn-danger">Blog</Link> */}
        <a href='https://forms.gle/3gMEdXo3xxQmrZkm7' target='_blank' className='btn btn-danger'>JOIN OUR TEAM</a>
      </div>
    </div>
    <div className="carousel-item pickgradient">
      {/* <img src="https://source.unsplash.com/1400x400/?code,technology " className="d-block w-100" alt="..."/> */}
      <img   src={Image2} className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block carousel_section_center">
        <h2>Here you will find best Coding Blog</h2>
        <p>Future Technology , Web Development and current trends</p>
        <Link to='/blog' className="btn btn-danger">Blog</Link>

      </div>
    </div>
    <div className="carousel-item pickgradient">
      {/* <img src="https://source.unsplash.com/1400x400/?desktop,laptop" className="d-block w-100" alt="..."/> */}
      <img src={Image3} className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block carousel_section_center">
        <h2>Award Winning Blog</h2>
        <p>Technology , Web Development and trends</p>
        <Link to='/blog' className="btn btn-danger">Blog</Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>
 
  )
}
