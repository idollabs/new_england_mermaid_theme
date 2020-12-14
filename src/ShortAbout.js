import React from 'react';
import profileImg from './images/mermaidpic.jpg';

const ShortAbout = () => {
  return (
    <article className='shortAbout'>
      <div className='imgContainer'>
        <img src={profileImg} alt='' />
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
