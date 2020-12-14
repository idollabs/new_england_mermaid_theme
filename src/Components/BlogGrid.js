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
      <div className='child2'>
        <h1>Blog2</h1>
      </div>
      <div className='child3'>
        <h1>Blog3</h1>
      </div>
    </div>
  );
};

export default BlogGrid;
