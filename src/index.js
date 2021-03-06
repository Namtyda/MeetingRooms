import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/redux-store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NewMeeting } from '../src/components/NewMeeting/NewMeeting'
import { Home } from '../src/components/Home/Home'
import './index.css';
import { App } from './components/App/App';
import { Provider } from 'react-redux'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/newmeeting' component={NewMeeting} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

