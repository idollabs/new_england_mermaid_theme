import React from 'react';
import Image from '../images/mermaidpicrect.jpg';

let headImg = Image;

const Header = () => {
  return (
    <>
      <div className='topLogo'>
        {/* <img className='headerImg' src={headImg} /> */}
        <h1>New England Mermaid</h1>
        <div className='gradiant'></div>
      </div>

      <header className='header'>
        <div className='headerNav'>
          <ul>
            <li>
              <h4 className='navBtn'>Home</h4>
            </li>
            <li>
              <h4 className='navBtn'>About</h4>
            </li>
            <li>
              <h4 className='navBtn'>Blogs</h4>
            </li>
            <li>
              <h4 className='navBtn'>Contact</h4>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
