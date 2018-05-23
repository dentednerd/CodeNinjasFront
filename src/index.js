import createBrowserHistory from 'history/createBrowserHistory';

// React
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Components/Pages
import App from './components/App';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Level from './pages/Level';
import NoMatch from './pages/NoMatch';

// Reducer
import reducer from './reducer';

// Store
const store = createStore(reducer, applyMiddleware(thunk, logger));

// Browser History

const history = createBrowserHistory();

render(
  (
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={UserProfile} />
            <Route path='/levels/:level' component={Level} />
            <Route component={NoMatch} />
          </Switch>
        </App>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
