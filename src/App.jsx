import React, { Suspense, lazy } from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Loader from './loader/Loader';
import MouseFollower from './component/MouseFollower';


const App = () =>
{
  const Home = lazy( () => import( './pages/Home' ) );
  const About = lazy( () => import( './pages/About' ) );
  const Service = lazy( () => import( './pages/Service' ) );
  const Portfolio = lazy( () => import( './pages/Portfolio' ) );
  const News = lazy( () => import( './pages/News' ) );
  const Contact = lazy( () => import( './pages/Contact' ) );

  return (
    <>
      <MouseFollower />
      <Suspense fallback={ <Loader /> }>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/service' element={ <Service /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/news' element={ <News /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </Suspense>
    </>

  );
};

export default App;