import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

function App() {
  return (
    
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Home/>} />
          <Route exact path='/about' render={() => <About/>} />
          <Route exact path='/projects' render={() => <Projects/>} />
          <Route exact path='/resume' render={() => <Resume/>} />
          <Route exact path='/contact' render={() => <Contact/>} />
        </Switch>
      </Fragment>
    
  );
}

export default App;
