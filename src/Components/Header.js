import React from 'react';
import Image from '../images/mermaidpicrect.jpg';

let headImg = Image;

const Header = () => {
  return (
    <>
      <div className='topLogo'>
        <img className='headerImg' src={headImg} />
        <h1>New England Mermaid</h1>
      </div>
      <header className='header'>
        <div className='headerNav'>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
