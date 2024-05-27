
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Expertise from './components/Expertise/Expertise';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import './App.css';

function App(){
  return (
    <>
      <NavBar />
      <Home />
      <Expertise />
      <Work />
      <Footer />
    </>
  );
}

export default App;