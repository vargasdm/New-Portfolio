import './App.css';
import ContentContainer from './components/ContentContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Fragment } from 'react';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';




function App() {
  return (

    <div className="new-portfolio-app">
      <ContentContainer />
      <Footer />
    </div>

  );
}

export default App;
