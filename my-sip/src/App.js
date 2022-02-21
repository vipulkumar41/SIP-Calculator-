import React from 'react';
import './Assets/Styles/App.css';
import Nav from './Layouts/Nav.js';
import First from './Components/first.js';
import Side from './Layouts/sidebar.js'

function App() {
  return (
    <div>
    <Side/>
    <Nav/>
    <First/>
    </div>
  );
}

export default App;
