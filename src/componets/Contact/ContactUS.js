import React from 'react'
import './Css/style.css'
import mail from './images/mail.png'
import location from './images/location.png'
import emailjs from 'emailjs-com'
import phone from './images/phone.png'
const ContactUS = () => {

  const SendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY_CONTACT,process.env.REACT_APP_TEMPLATE_KEY,e.target,process.env.REACT_APP_USER_KEY).then((res)=>{
console.log(res.text)
    })  
  }



  return (<div>

    {/* 
    <!-- ====================================== Slider End ============================================ -->

    <!-- =======================================Get in touch heading ============================================ --> */}


    <div style={{ display: 'flex', flexDirection: 'column' }} >
      <section>
        <div className="contact-hd container">
          <div>
            <h1 >Get in <color className="contact-hd"> touch </color></h1>
            <p>
              We are here for you, Any FAQs then ask us. Our team give you an
              immediate response.
            </p>
          </div>

        </div>
      </section>
    </div>
    <section>
      <div className="contact-form container">
        <div className="row">
          <div className="info col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <span>
              <img className="callme" src={location} alt="" />
              <h4>Location:</h4>
              <p>
                NED University of Engineering and Technology University Road,
                Karachi 75270
              </p>
            </span>
            <span
            ><img className="callme" src={mail} alt="" />
              <h4>Email:</h4>
              <p>acmneduet@gmail.com</p>
              <p></p
              ></span>

            {/* <span><img className="callme" src={phone} alt="" />
              <h4>Call:</h4>
              // {/* <p>+92 308 2931010</p> */}
            {/* </span>  */}
         
         
          </div>
          <div className="inputs col-sm-12 col-md-7 col-lg-7 col-xl-7">
          {/* action="mailto:haseebullahmemon33@gmail.com" method='POST' */}
            <form  onSubmit={SendEmail}  >

              <input type="text" name='name' className="name-inp" placeholder="Your Name" required />
              <input type="email" name='email' className="email-inp" placeholder="Your Email" required />
              <br />
              <input type="text" name='subject' className="email-inp" placeholder="Subject" required /> <br />
              <textarea
                name="message"
                cols="30"
                rows="5"
                className="textarea-inp"              
                placeholder="message"
                required
              ></textarea>
              <div>
                <input type='submit' className="submitBtn btn btn-primary text-center " title='Submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ContactUS