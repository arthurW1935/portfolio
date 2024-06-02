
import React from 'react';
import Cursor from './components/Cursor/Cursor';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Expertise from './components/Expertise/Expertise';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import './App.css';

function App(){
  return (
    <>
      <Cursor />
      <NavBar />
      <Home />
      <Expertise />
      <Work />
      <Footer />
    </>
  );
}

export default App;