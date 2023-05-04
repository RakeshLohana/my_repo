import React from 'react'
const UpcomingEvents = [
  {
    id: 1,
    image: 'images/competation/image_1.jpg'
  },
  {
    id: 3,
    image: 'images/competation/image_3.jpg'
  },
]
const OngoingEvents = [

  {
    id: 4,
    image: 'images/competation/image_4.png'
  },
]
const PreviousEvents = [
  {
    id: 5,
    image: 'images/competation/image_5.jpg'
  },
  {
    id: 6,
    image: 'images/competation/image_6.jpg'
  },
]
const Sponsors = [
  {
    id: 1,

    image: 'images/Sponsos/s_1.jpg'
  },

]
const Itec = () => {
  return (
    <div>

      <div>
        <section id="home">
          <div className="container-fluid w-100 top-banner">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <h1>Game Jam'23</h1>
                  <p>Get ready to showcase your coding prowess and win big prizes.Hurry-Up get Register for our competition today!</p>
                </div>
                <div className="mt-4">
                  <a href='https://forms.gle/933npN97Gxk1BAhN6' target='_blank' className="main-btn">Register Now</a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className='sponsor_section mt-5 '>
        <h1 className='text-center' >Upcoming Events</h1>
        <div className="row">
          {UpcomingEvents.map((ele) => {
            return (
              <div key={ele.id} className="col-lg-4 col-md-10 col-sm-10 offset-md-1">
                <div className="card mt-5 p-4 mx-auto manon ">
                  <img src={ele.image} className="card-img-top" alt="..." />

                  <div className='text-center'>
                    <a className='main-btn text-decoration-none' href='https://forms.gle/933npN97Gxk1BAhN6' target='_blank'> Register Now </a>
                  </div>

                </div>
              </div>


            )
          })}

        </div>

      </div>
      <div className='sponsor_section mt-5 '>
        <h1 className='text-center' >Ongoing Events</h1>
        <div className="row">
          {OngoingEvents.map((ele) => {
            return (
              <div key={ele.id} className="col-lg-5 col-md-10 col-sm-10 offset-md-1">
                <div className="card mt-5 p-4 mx-auto manon " >
                  <img src={ele.image} className="card-img-top" style={{height:'530px'}} alt="..." />
                </div>
              </div>
            )
          })}

        </div>

      </div>

      <div className='sponsor_section mt-5 '>
        <h1 className='text-center' >Previous Events </h1>
        <div className="row">
          {PreviousEvents.map((ele) => {
            return (
              <div key={ele.id} className="col-lg-4 col-md-10 col-sm-10 offset-md-1">
                <div className="card mt-5 p-4 mx-auto manon ">
                  <img src={ele.image} className="card-img-top" alt="..." />
                </div>
              </div>
            )
          })}

        </div>

      </div>
      <div className='sponsor_section mt-5 w-100'>
        <h1 className='text-center' >Sponsors</h1>
        <div className="row">
          {Sponsors.map((ele) => {
            return (
              <div >
                <section className='container' >
                  <div class="about-pg-boxes container-fluid">
                    <div className="row">

                      <div className="about-pg-pic col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <img className='about2' src={ele.image} alt="" />
                      </div>

                      <div className="about-pg-details first-txt col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <section>
                          <div className="contact-hd container about-hd">
                            <h1>Octdaily
                            </h1>
                          </div >
                        </section>
                        <p>From improving your content to transforming the face of your business, streamlining processes, managing customer relations, and using data analytics to better understand trends; OctDaily helps you scale the business world with one cool technology daily.</p>
                        <div className="mt-4">
                          <a href='https://octdaily.com/' target='_blank' className="main-btn">Vist Website</a>

                        </div>
                      </div>
                    </div>

                  </div>

                </section>


              </div>


            )
          })}

        </div>

      </div>




    </div>
  )
}

export default Itec