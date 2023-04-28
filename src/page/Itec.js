import React from 'react'
const UpcomingEvents=[
  {id:1,
    image:'images/competation/image_1.jpg'},
    {id:3,
    image:'images/competation/image_3.jpg'},
]
const OngoingEvents=[
 
  {id:4,
  image:'images/competation/image_4.png'},
]
const PreviousEvents=[
  {id:5,
  image:'images/competation/image_5.jpg'},
  {id:6,
  image:'images/competation/image_6.jpg'},
]
const Sponsors=[
  { id:1,
    category:"Platinum",
    image:'images/Sponsos/s_1.jpg'
  },
  { id:5,
    category:"Gold",
    image:'images/Sponsos/s_6.jpg'
  },
  { id:2,
    category:"Silver",
    image:'images/Sponsos/s_2.jpg'
  },  
  { id:3,
    category:"",
    image:'images/Sponsos/s_3.jpg'
  },
  { id:4,
    category:"",
    image:'images/Sponsos/s_4.png'
  },
 
  { id:6,
    category:"",
    image:'images/Sponsos/s_7.jpg'
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
<h1>Web Kode'23</h1>
<p>Get ready to showcase your coding prowess and win big prizes.Hurry-Up get Register for our competition today!</p>
  </div>
<div className="mt-4">
  <a  href='https://forms.gle/sTNfdyiKaqm8WruS8' target='_blank' className="main-btn">Register Now</a>
 
</div>
      </div>
  </div>
  </div>
    </section>
  </div>  


  <div className='sponsor_section mt-5 '>
  <h1 className='text-center' >Upcoming Events</h1>
<div className="row">
{UpcomingEvents.map((ele)=>{
return(
 <div key={ele.id} className="col-lg-5 col-md-10 col-sm-10 offset-md-1">
 <div className="card mt-5 p-3 mx-auto manon ">
  <img src={ele.image} className="card-img-top" alt="..."/>

</div>
  </div>


)
})}
 
</div>





</div>





  <div className='sponsor_section mt-5 '>
  <h1 className='text-center' >Ongoing Events</h1>
<div className="row">
{OngoingEvents.map((ele)=>{
return(
 <div key={ele.id} className="col-lg-5 col-md-10 col-sm-10 offset-md-1">
 <div className="card mt-5 p-3 mx-auto manon ">
  <img src={ele.image} className="card-img-top" alt="..."/>
<div className='text-center'>
<a  className='main-btn text-decoration-none' href='https://forms.gle/sTNfdyiKaqm8WruS8'  target='_blank'> Register Now </a>
</div>
 
  
</div>
  </div>


)
})}
 
</div>





</div>

<div className='sponsor_section mt-5 '>
  <h1 className='text-center' >Previous Events </h1>
<div className="row">
{PreviousEvents.map((ele)=>{
return(
 <div key={ele.id} className="col-lg-5 col-md-10 col-sm-10 offset-md-1">
 <div className="card mt-5 p-3 mx-auto manon ">
  <img src={ele.image} className="card-img-top" alt="..."/>
<div className='text-center'>
<a  className='main-btn text-decoration-none' href='https://forms.gle/sTNfdyiKaqm8WruS8'  target='_blank'> Register Now </a>
</div>
 
  
</div>
  </div>


)
})}
 
</div>





</div>






<div className='sponsor_section mt-5 w-100'>
  <h1 className='text-center' >Sponsors</h1>
<div className="row">
{Sponsors.map((ele)=>{
return(
 <div className="col-lg-2 col-md-4 col-sm-6">
 <div className="card border-0 mx-auto " style={{width: "12rem"}}>
  <img src={ele.image} className="card-img-top" alt="..."/>
  <p className='text-danger' >{ele.category}</p>
  
</div>
  </div>


)
})}
 
</div>





</div>
  
  
  
  
  </div>
  )
}

export default Itec