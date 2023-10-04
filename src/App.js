import Gallery from './gallery.js';
import './App.css';
import Task1 from './/programs/Task1.js';
import App from './/effects/effect.js';
import Cat from './fetching/fetch.js';
import Age from './Ageapp/predictAge.js';
import Excuse from './excuse/excuseapp.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Page() {
  return (
    <div className="Page">
      <Router>
        <div>
          <a href='/'>Home</a>
          <a href='/age'>Age</a>
        </div>

        <Routes>
          <Route path='/' element={<Excuse />} />
          <Route path='/age' element={<Age />} />

        </Routes>
      </Router>

    </div>
  );
}

