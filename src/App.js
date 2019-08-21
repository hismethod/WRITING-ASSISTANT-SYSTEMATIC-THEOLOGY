import React, { useContext } from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import { Home, Viewer } from './page';
import { observer } from 'mobx-react-lite';
import { useAppStore } from './hooks/useAppStore';
const App = () => {
  return (
      <div className="App">
        <Route path="/:book" component={Home} />
        <Route path="/list/:book" component={Home} />
        <Route path="/viewer" component={Viewer}/>
      </div>
  )
};

export default App;
