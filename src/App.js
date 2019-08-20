import React, { useContext } from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import { Home, Single } from './page';
import { observer } from 'mobx-react';
import { useAppStore } from './hooks/useAppStore';
const App = observer(() => {
  return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/single" component={Single}/>
      </div>
  )
});

export default App;
