import React from 'react'
import './Css/style.css'
import instra from './images/instagram.png'
import facebook from './images/facebook.png'
import linken from './images/linkedin.png'
import {Link}from 'react-router-dom'

const footer = () => {
  return (
    <div> <section>
    <div className="footer">
      <div className="footer-box">
        <p className="footer-mat">Contact Us</p>
        <p className="footer-para" style={{fontSize:'20px'}}><b>Email: </b > CodingClub@gmail.com</p>
        {/* <p className="footer-para"><b>Phone:</b> +92 308 2931010</p> */}
        <a href="#"  target='_blank'
          ><img src={facebook} height="30px" width="30px"
        /></a>
        <a href="#" target='_blank'
          ><img src={instra} height="30px" width="30px"
        /></a>
        <a
          href="#"  target='_blank'
          ><img src={linken} height="30px" width="30px"
        /></a>
      </div>
      <div className="footer-box" >
        <p className="footer-mat">Information  Quick Access</p>
        <Link to='/' className="footer-para">Home</Link> <br />
        <Link to='/team' className="footer-para">Team</Link> <br />
        
        <Link to='/Event' className="footer-para">Events</Link> <br />
        <Link to='/blog' className="footer-para">Blogs</Link> <br />
        <Link to='/gallery' className="footer-para">Gallery</Link> <br />
        <Link to='/leaderboard' className="footer-para">Leader Board</Link> <br />
      </div>
    
    </div>
  </section>
{/* 
  <!-- ======================================= Footer End ============================================ -->

  <!-- ========================================= Copyright ============================================ --> */}

  <section className="copyright container-fluid">
    <div className="row1">
      
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <center>
          <h5 style={{margin:"10px 0"}}>
            Copyright © 2023. Coding Club. All rights reserved
          </h5>
          {/* <p className="p2 text-muted">
            Developed by <i className="hush  text-primary">Team Technical</i>
          </p> */}
        </center>
        </div>
      
    </div>
  </section>
</div>
  )
}

export default footer