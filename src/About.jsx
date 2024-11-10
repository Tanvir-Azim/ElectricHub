import React from 'react';
import HeroSection from './components/HeroSection'



function About() {


  const data={
    name:'Tanvir Ecommarce',
    img: './images/hero.jpg'
  }
  return (
    <>

      <HeroSection mydata={data}/>
    </>
    
  )
}

export default About