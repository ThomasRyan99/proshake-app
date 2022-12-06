import React from 'react'
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './aboutus.css';
import gym from '../components/pictures/gym.png';
import logo from '../components/pictures/logo.png';


export default function Menu() {
  return (
    <>
    <NavBar/>
    <Carousel/>
    <div className='storyheading'>
        <h1> Our Story </h1>
    </div>
    <div className='story-container'>
      <div className='grid-item'>
      <div className='gym-img'><img src={gym} alt=''/></div>
      </div>
      <div className='grid-item'>
      <div className='story'>
        <h1> I started going to the gym about three years ago, I had no real idea </h1>
        <h1> what I was doing and not taking it seriously up until this year. </h1>
        <h1> Training became addictive and habitual, I loved the pump and the push </h1>
        <h1> to do better. The outstanding problem that occurred to me was nutrition, </h1>
        <h1> portein intake in particular. My gymbro and I would go to a supplement</h1>
        <h1> store and buy a whey protein which was a stab in the dark for a good flavour </h1>
        <h1> at a very high price point. Not only that but the shakes would make me feel </h1>
        <h1> lethargic and worse for my mate who is lactose intolerant. We had to switch</h1>
        <h1> it up to plant based protein which had a shocking flavour and made the post </h1>
      </div>
      </div>
      <div className='grid-item'>
      <div className='story2'>
        <h1> gym protein shake something we dreaded. It wasnt until I found out you could </h1>
        <h1> buy unflavoured pea protein that we started making protein smoothies. The</h1>
        <h1> first few drinks were subpar but after months of trial and error we had </h1>
        <h1> perfected the recipe and created a dairy free, gluten free, 100% plant based </h1>
        <h1> protein smoothie that we genuinely looked forward to post gym. This was when </h1>
        <h1> we realised that we have found a problem in the current gym lifestyle that</h1>
        <h1> we have solved with our protein smoothies. Thus we started our brand "ProShake" </h1>
        <h1> a hassle free, affordable, and nutritious smoothie for any dietary requirement  </h1>
        <h1> gym goer.</h1>
      </div>
      </div>
      <div className='grid-item'>
      <div className='logo-img'><img src={logo} alt=''/></div>
      </div>
    </div>

    <Footer/>
    </>
  )
}
