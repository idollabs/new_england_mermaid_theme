import React from 'react';

const Header = () => {
  return (
    <>
      <div className='topLogo'>
        <h1>New England Mermaid</h1>
      </div>
      <header className='header'>
        <div className='headerNav'>
          <ul>
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
