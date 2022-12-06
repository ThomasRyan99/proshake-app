import React from 'react'
import images2 from '../links/Images2'
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import slides from '../components/SliderData';


export default function HomePage() {
  return (
    <>
    <NavBar/>
    <Carousel/>
    <div className='heading'>
      <h1> Feel STRONG</h1>
    </div>
    <div className='sub-heading'>
      <h3>Our 100% natural protein shakes are jam </h3>
      <h3> packed full of protein to fuel your workout</h3>
    </div>
    <div className='icons'>
      {images2.map((x, index) => (
        <div className='mid-page-icons' 
        key={index} >
            <img src={x.image} alt="" />
            <h1 className='icon-title1'> {x.title} </h1>
            </div>
         ))}   
    </div>
    <div className='heading'>
      <h1>Our Smoothies</h1>
    </div>
    <ImageSlider slides={slides}/>
    <Footer/>

    </>
  )
}
