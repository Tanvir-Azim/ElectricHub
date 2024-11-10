import React from 'react'
import HeroSection from './components/HeroSection'
import Survices from './components/Survices'
import FeatureProduct from './components/FeatureProduct'

function Home() {

  const data={
    name:'Tanvir Store',
    img: './images/hero.jpg'
  }
  return (
    <>
        <HeroSection mydata={data}/>
        <FeatureProduct/>
        <Survices/>
    </>
    
  )
}

export default Home