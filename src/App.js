import React, { Fragment } from 'react';

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Components/AboutBar/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    
      <Fragment>
        <Header />
        
        {/* <Home />
        <About />
        <Projects />
        <Resume />
        <Contact /> */}
        
      </Fragment>
    
  );
}

export default App;