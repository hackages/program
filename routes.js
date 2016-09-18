import React from 'react';

import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';

import Courses from './containers/courses';
import Main from './containers/main';
import Course from './components/course';

const Routes = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={Main}/>
      <Route path="courses" component={Courses}>
       <Route path=":name" component={Course}/>
      </Route>
    </Router>
  );
};


export default Routes;
