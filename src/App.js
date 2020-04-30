import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GetAppointment from './components/GetAppointment/GetAppointment';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
          </Route>
          <Route path="/get-appointment">
            <Header></Header>
            <GetAppointment></GetAppointment>
          </Route>
          <Route path="*">
            <Header></Header>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
