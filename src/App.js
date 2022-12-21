import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css';
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <Link to={'about'}>About</Link>
        <Link to={'contact'}>Contact</Link>
      </nav>
    <Outlet/>
    </>
  );
}

export default App;