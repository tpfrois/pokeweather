import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from '../pages/Home';
import Weather from '../pages/Weather';

const Routes = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(50px)'
    }
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/weather" component={Weather} />
      </Switch>
    </animated.div>
  ))
}

export default Routes;