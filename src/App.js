import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroCards from './components/HeroCards';
import Footer from './components/Footer';

function App() {
  return (
   <div className="app-wrapper">
   <Header/>
   <HeroCards/>
   <Footer/>
   </div>
  );
}

export default App;
