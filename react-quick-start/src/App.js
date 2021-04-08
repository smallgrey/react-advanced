import React, { Component } from 'react';
import { mainRoute } from './routes';
import {Route,Redirect,Switch} from 'react-router-dom';
import intl from 'react-intl-universal';
import './App.css';

// locale data
const locales = {
  "en-US": require('./locales/en-US.json'),
  "zh-CN": require('./locales/zh-CN.json'),
};

export default class App extends Component {
  
  state = {initDone: false}

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {

    let currentLocale = intl.determineLocale({
      urlLocaleKey: "lang",
      cookieLocaleKey: "lang"
    });

    intl.init({ // react-intl-universal 是单例模式, 只应该实例化一次
      currentLocale,
      locales,
    })
    .then(() => {
	    this.setState({initDone: true});
    });
  }
  render() {
    return (
      <Switch>
        {
          mainRoute.map( (route, key)=>{
            return <Route path={route.pathname} component={route.component} key={key}/>
          })
        }
        <Redirect to={mainRoute[0].pathname} from='/' exact/>
      </Switch> 
    )
  }
};
