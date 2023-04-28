import React from 'react'
import Aboutus from '../componets/Aboutus'
import Carousel from '../componets/Carousel'
import ContantUs from '../componets/Contact/ContactUS'
import Navbar from '../componets/Navbar'

const Home = () => {
  return (
    <>
    <div className='container-fluid' >
    <Carousel/>
    <Aboutus/>
<ContantUs/>
    </div>
   
   </>
  )
}

export default Home