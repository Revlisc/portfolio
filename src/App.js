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
        
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
        
      </Fragment>
    
  );
}

export default App;

/* <Fragment>
<Header />
<Switch>
  <Route exact path='/' render={() => <Home/>} />
  <Route exact path='/about' render={() => <About/>} />
  <Route exact path='/projects' render={() => <Projects/>} />
  <Route exact path='/resume' render={() => <Resume/>} />
  <Route exact path='/contact' render={() => <Contact/>} />
</Switch>
</Fragment> */