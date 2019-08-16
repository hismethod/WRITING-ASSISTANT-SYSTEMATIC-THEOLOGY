import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import { Home } from './page';

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Home} />
    </div>
  )
}

export default App;
