import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import { Router, browserHistory, Route, IndexRoute} from 'react-router'

import App from './js/components/App'
import Home from './js/components/Home'
import HomeWorks from './js/components/HomeWorks'
import HomeWorkPerWeek from './js/components/HomeWorkPerWeek'
import IntroHomeWork from './js/components/IntroHomeWork'

  

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/homeworks" component={HomeWorks}>
        <IndexRoute component={IntroHomeWork}/>
        <Route path=":week" component={HomeWorkPerWeek}/>
      </Route>
    </Route>
  </Router>
  , document.getElementById('root'));