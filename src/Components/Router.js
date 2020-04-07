import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from '../Routes/Home'
import HotelList from '../Routes/HotelList'

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hotels" component={HotelList} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
