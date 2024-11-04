import React from 'react';
import './posts.css';  
import image3 from '/home/ukijaffna/Documents/blog/src/component/download (1).jpeg';

function Post3() {
  return (
    <div className="post">
      <img src={image3} alt="algorithm" className="post-image" />
      <div className="post-content">
        <h2>Algorithm</h2>
        <p>
          The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. 
          Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon 
          in order to get the expected results.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default Post3;