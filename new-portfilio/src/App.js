import './App.css';
import NewPortfolio from './components/ContentContainer';
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
    <Fragment>
      <Header />

      <div className="new-portfolio-app">
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<NewPortfolio />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/resume' element={<Resume/>}/>
            

          </Routes>

        </BrowserRouter>


      </div>
      <Footer />
    </Fragment>






  );
}

export default App;
