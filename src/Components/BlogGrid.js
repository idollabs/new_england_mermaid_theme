import React, { useState } from 'react';

const BlogGrid = () => {
  const [info, setInfo] = useState('');
  const handleBlogInfo = () => {
    if (info === '') {
      setInfo('hover worked');
    } else {
      setInfo('');
    }
  };

  return (
    <div className='parent'>
      <div
        className='child1'
        onMouseEnter={handleBlogInfo}
        onMouseLeave={handleBlogInfo}
      >
        <h1>{info}</h1>
      </div>
      <div
        className='child2'
        onMouseEnter={handleBlogInfo}
        onMouseLeave={handleBlogInfo}
      >
        <h1>{info}</h1>
      </div>
      <div
        className='child3'
        onMouseEnter={handleBlogInfo}
        onMouseLeave={handleBlogInfo}
      >
        <h1>{info}</h1>
      </div>
    </div>
  );
};

export default BlogGrid;
