import React from "react";

// import components
import Nav from './components/Nav';
import FooterComponent from './components/Footer';
import { Route, Routes, HashRouter as Router } from "react-router-dom";

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from "./pages/Contact";

const App = () => {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <FooterComponent />
      </Router>
  );
};

export default App;
