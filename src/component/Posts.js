import React from 'react';

import './posts.css';  
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';

function Posts() {
  return (
    
    <div className='arrow'>
    <Post1/>
    <Post2/>
    <Post3/>
    <Post4/></div>
  );
}

export default Posts;