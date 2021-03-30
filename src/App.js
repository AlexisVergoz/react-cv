import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import home from './pages/home';
import knowledges from './pages/knowledges';
import portfolio from './pages/portfolio';
import contact from './pages/contact';
import notFound from './pages/notFound';

const App = () => {
  return ( 
  <>
    <BrowserRouter >
      <Switch>
        <Route path="/"exact component = {home}/> 
        <Route path="/competence"component = {knowledges}/> 
        <Route path="/portfolio"component = {portfolio}/> 
        <Route path="/contact"component = {contact}/> 
        <Route component={notFound}/> 
      </Switch> 
    </BrowserRouter> 
 </>


  );
};

export default App;