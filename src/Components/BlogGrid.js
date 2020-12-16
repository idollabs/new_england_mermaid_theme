import React, { useState } from 'react';

const BlogGrid = () => {
  const [info1, setInfo1] = useState('');
  const [info2, setInfo2] = useState('');
  const [info3, setInfo3] = useState('');

  const handleBlogInfo = (itemKey) => {
    if (itemKey == 1) {
      if (info1 === '') {
        setInfo1('hover worked');
      } else {
        setInfo1('');
      }
    }
    if (itemKey == 2) {
      if (info2 === '') {
        setInfo2('hover worked');
      } else {
        setInfo2('');
      }
    }
    if (itemKey == 3) {
      if (info3 === '') {
        setInfo3('hover worked');
      } else {
        setInfo3('');
      }
    }
  };

  return (
    <>
      <div className='parent'>
        <div
          className='child1'
          key={1}
          onMouseEnter={() => handleBlogInfo(1)}
          onMouseLeave={() => handleBlogInfo(1)}
        >
          <h1>{info1}</h1>
        </div>
        <div className='child1B'></div>
        <div
          className='child2'
          key={2}
          onMouseEnter={() => handleBlogInfo(2)}
          onMouseLeave={() => handleBlogInfo(2)}
        >
          <h1>{info2}</h1>
        </div>
        <div className='child2B'></div>

        <div
          className='child3'
          key={3}
          onMouseEnter={() => handleBlogInfo(3)}
          onMouseLeave={() => handleBlogInfo(3)}
        >
          <h1>{info3}</h1>
        </div>
        <div className='child3B'></div>
      </div>
    </>
  );
};

export default BlogGrid;
