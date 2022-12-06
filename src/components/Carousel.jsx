import React, { useEffect, useRef, useState } from 'react' ;
import './Carousel.css';
import images from '../links/Images'


const delay = 0;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, []);

  // console.log(images);

  return (

  
      // <div
      // className="slide"
      // key="1"
      // >
      // <img src={images[0]} alt="" />
      // </div>

      <div className="slideshow">
      <div className="slideshowSlider">
        {images.map((im, index) => (
          <div
            className="slide"
            key={"im"+index}
          >
            <img src={im} alt="" />
          </div>
        ))}
        {images.map((im, index) => (
          <div
            className="slide"
            key={"im2"+index}
          >
            <img src={im} alt="" />
          </div>
        ))}
      </div>
    </div>
    // <div className="slideshow">
    //   <div className="slideshowSlider">
    //     {images.map((Images, index) => (
    //       <div
    //         className="slide"
    //         key={index}
    //       >
    //         <img src={images[{index}]} alt="" />
    //       </div>
    //     ))}
    //     {images.map((Images, index) => (
    //       <div
    //         className="slide"
    //         key={index}
    //       >
    //         <img src={images[{index}]} alt="" />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

