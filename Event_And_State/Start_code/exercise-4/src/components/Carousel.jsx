import React from "react";
import {useState} from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImage, setCurrentImage] = useState(0);

  /* You will need to hanle the click on left and right button */
  function handleRight(){
    setCurrentImage((prev) => (prev + 1) % images.length);
  }

  function handleLeft(){
    setCurrentImage((prev) => prev === 0 ? images.length - 1 : prev - 1);
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeft} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentImage].src} alt={images[currentImage].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRight} />
    </div>
  );
};
