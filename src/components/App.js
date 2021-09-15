import React from 'react';

import Nav from './Nav';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
// import BlogIndex from './BlogIndex';
import Footer from './Footer';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-85329524-1');
ReactGA.pageview(window.location.pathname + window.location.search);

import {
   BrowserRouter,
   Route
} from 'react-router-dom'

const App = () => (

   <BrowserRouter>
      <div className="main-container">
         <Nav />
         <Route exact path="/" component={Home} />
         <Route path="/projects" component={Gallery} />
         <Route path="/react" component={Gallery} />
         <Route path="/ecommerce" component={Gallery} />
         <Route path="/email" component={Gallery} />
         <Route path="/design" component={Gallery} />
         {/*<Route path="/news" component={BlogIndex}/>*/}
         <Route path="/contact" component={Contact} />
         <Footer />
      </div>
   </BrowserRouter>
);

export default App;

