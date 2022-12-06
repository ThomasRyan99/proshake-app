import React from 'react';
import logo from '../components/pictures/logo.png';
import {Link} from 'react-router-dom';




export default function NavBar() {



  return (
    <>
    <div className='navbar'>
      <div className='leftside'>
        <div className='logo'><img src={logo} alt='' /> </div>
      </div>

      <div className='rightside'>     
        <button className='click'><Link to="/HomePage"> Home </Link></button>
        <button className='click'><Link to="/Menu"> Menu </Link></button>
        <button className='click'><Link to="/AboutUs"> About Us </Link></button>
        
      </div>
    </div>
    </>
  
);
}

















  //   <div className='navbar'>
  //     <div className='leftside'>
  //       <div className="logo">
  //         <img src="public\logo.png" alt="ProShake logo"/>
  //       </div>
  //     </div>
  //     <div className='rightside'>
  //           <a href="#about us.html"><button className="button-solid">ABOUT US</button></a> 
  //           <a href="/Menu.jsx"><button className="button-solid">MENU</button></a>  
  //           <a href="#index.html"><button className="button-solid">HOME</button></a>      

  //     </div>
  //   </div> 
  // )






