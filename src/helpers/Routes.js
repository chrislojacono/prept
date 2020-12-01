import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FlashCard from '../views/FlashCard';
import NotFound from '../views/NotFound';
import Home from '../views/Home';

export default function Routes() {
  return (
      <Switch>
        <Route exact path='/' component={() => <Home/>}/>
        <Route exact path='/flashcard' component={() => <FlashCard/>}/>
        <Route component={() => <NotFound/>} />
      </Switch>
  );
}
