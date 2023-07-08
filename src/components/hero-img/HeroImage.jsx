import React, { useState, useEffect } from 'react'

const HeroImage = ({ placeholderSrc, src }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
    {...{ src: imgSrc }}
    alt='My Image'  
    className="image"
  />
  )
}

export default HeroImage