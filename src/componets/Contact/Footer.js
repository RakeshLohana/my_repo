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
        <p className="footer-para"><b>Email: </b> acmneduet@gmail.com</p>
        {/* <p className="footer-para"><b>Phone:</b> +92 308 2931010</p> */}
        <a href="https://web.facebook.com/ned.acm/?_rdc=1_rdr"  target='_blank'
          ><img src={facebook} height="20px" width="20px"
        /></a>
        <a href="https://www.instagram.com/accounts/login/?next=/acmneduet/" target='_blank'
          ><img src={instra} height="20px" width="20px"
        /></a>
        <a
          href="https://www.linkedin.com/company/neduet---acm-student-chapter/?originalSubdomain=pk"  target='_blank'
          ><img src={linken} height="20px" width="20px"
        /></a>
      </div>
      <div className="footer-box">
        <p className="footer-mat">Information  Quick Access</p>
        <Link to='/' className="footer-para">Home</Link> <br />
        <Link to='/team' className="footer-para">Team</Link> <br />
        
        <Link to='/itec' className="footer-para">ITEC</Link> <br />
        <Link to='/blog' className="footer-para">Blogs</Link> <br />
        <Link to='/' className="footer-para">Contact Details</Link> <br />
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
          <p className="p1 text-muted">
            Copyright © 2022. Coding Club. All rights reserved
          </p>
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