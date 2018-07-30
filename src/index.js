import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { Router, Route, Link } from 'react-router-dom';
import history from './history.js';
import Admin from './components/Admin';
import App from './App';
import Office from './components/Office';
import Add from './components/Add';
import Articles from './components/Articles';
import Article from './components/Article';
import Public from './components/Public';
import Read from './components/Read';

render(
      <Router history={history}>
      <div>

          
          <Route exact path="/" component={App} />
          <Route exact path='/public' component={Public}/>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/office" component={Office}/>
          <Route exact path="/admin/office/add" component={Add}/>
          <Route exact path="/admin/office/articles" component={Articles}/>
          <Route exact path="/admin/office/articles/:id" component={Article}/>
          <Route exact path="/public/:id" component={Read}/>
        </div>
      </Router>
,document.getElementById('root'));
