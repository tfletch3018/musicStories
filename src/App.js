import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import Navbar from '../src/components/Navbar';
import Home from './pages/home';
import Music from './pages/music';
import Blog from './pages/blog';
import Contact from './pages/contact';

function App() {

  return (

    <div className=''>
      <HashRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </HashRouter>

    </div>
  )
}

export default App;