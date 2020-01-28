import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NewMeeting } from '../src/components/NewMeeting/NewMeeting'
import { Home } from '../src/components/Home/Home'
import './index.css';
import { App } from './components/App/App';




// const element = <App />

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/newmeeting' component={NewMeeting} />
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));

