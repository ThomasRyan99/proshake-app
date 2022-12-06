import React from 'react'
import './footer.css'


export default function Footer() {
  return (
    <div className='footer'>
      <div className='left-footer'>
        <div className='text'>
          <h1>Follow us on Instagram</h1>
        </div>

        <div className='img-and-text-left'>
          <div className='left-img'>
          <a href="https://www.instagram.com/proshake_/" target="_blank">
          <img src="pictures/insta.png" alt=""/>
          </a>
          </div>
          <div className='link-text-left'>
            <h1>@Proshake_</h1>
          </div>
        </div>

      </div>
      <div className='right-footer'>
        <div className='text'>
          <h1>Like us on Facebook</h1>
        </div>

        <div className='img-and-text-right'>
          <div className='right-img'>
            <img src="pictures/facebook.png" alt=""/>
          </div>
          <div className='link-text-right'>
            <h1>Proshake</h1>
          </div>
        </div>
      </div>
    </div>
   

    
    
  )
}
