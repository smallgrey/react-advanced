import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { mainRoute } from './routes';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" component={App}/>
      {
        mainRoute.map( (route, key)=>{
          return <Route path={route.pathname} component={route.component} key={key}/>
        })
      }
      <Redirect to='/home' from='/' exact/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
