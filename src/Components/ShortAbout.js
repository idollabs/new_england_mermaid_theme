import React, { useState } from 'react';
import profileImg from '../images/mermaidpicrect.jpg';
import altImg from '../images/mermaidpic.jpg';

const ShortAbout = () => {
  const [image, setImage] = useState('');
  const handleImg = () => {
    setImage(profileImg);
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    if (mediaQuery) {
      setImage(profileImg);
    }
    console.log(image);

    return image;
  };

  return (
    <article className='shortAbout'>
      <div className='imgContainer'>
        <img src={handleImg} alt='' />
      </div>
      <div className='textContainer'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dicta at
          veritatis aliquam iure tenetur officiis? Maiores ipsum aliquid modi.
        </p>
      </div>
    </article>
  );
};

export default ShortAbout;
