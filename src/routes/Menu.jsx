import React from 'react';
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import strawberrycream from '../components/pictures/strawberrycream.png';
import mangopassion from '../components/pictures/mangopassion.png';
import chocolate from '../components/pictures/chocolate.png';
import './menu.css';


export default function Menu() {
  return (
    <>
    <NavBar/>
    <Carousel/> 
    <div className='left-side'>
        <div className='fruit'><img src={strawberrycream} alt='' /> </div>
        <div className='ingredients'>
          <div className='iheading'>
            <h1> Strawberry Cream </h1>
          </div>
          <div className='ingredients2'>
          <h2> Ingredients </h2>
          <h3> Strawberries, Coconut cream, Apple, Unflavoured Pea Protein, Vanilla extract, Sweeteners (sodium Cyclmate, Sodium Saccharine), Stevia, Almond milk, Xantham gum, Coconut water,  </h3>
        </div>
        </div>
        

        <div className='fruit2'><img src={mangopassion} alt='' /> </div>
        <div className='ingredients'>
          <div className='iheading'>
            <h1> Tropical </h1>
          </div>
          <div className='ingredients2'>
          <h2> Ingredients </h2>
          <h3> Mango, Passionfruit, Pineapple, Unflavoured Pea Protein, Vanilla extract, Sweeteners (sodium Cyclmate, Sodium Saccharine), Almond milk, Xantham gum, Coconut water </h3>
        </div>
        </div>
        

        <div className='fruit3'><img src={chocolate} alt='' /> </div>
        <div className='ingredients'>
          <div className='iheading'>
            <h1> Chocolate Cream </h1>
          </div>
          <div className='ingredients2'>
          <h2> Ingredients </h2>
          <h3> Cocoa Powder, Coconut cream,  Unflavoured Pea Protein, Vanilla extract, Sweeteners (sodium Cyclmate, Sodium Saccharine), Almond milk, Xantham gum, Coconut water </h3>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
