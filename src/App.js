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
import AppointmentList from './components/AppointmentList/AppointmentList';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
          </Route>
          <Route exact path="/doctor/appointment">
            <Header></Header>
            <GetAppointment></GetAppointment>
          </Route>
          <Route exact path="/doctor/appointment/list">
            <Header></Header>
            <AppointmentList></AppointmentList>
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
