import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'; 
import BlogNav from './BlogNav';
import Posts from './Posts';
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';


function App() {
  return (   
       <div className="App">
    <Router>

        <BlogNav />
        
        <Routes>
          <Route path="/blog-react" element={<Posts />} />
          <Route path="/post1" element={<Post1 />} />
          <Route path="/post2" element={<Post2 />} />
          <Route path="/post3" element={<Post3 />} />
          <Route path="/post4" element={<Post4 />} />
        </Routes>
        
    </Router>
    </div>
  );
}


export default App;