// import logo from './logo.svg';
import './App.css';
import Movies from './component/movies';
import NavBar from './component/navBar';
import Customers from "./component/customers";
import Rentals from './component/rentals';
import NotFound from './component/notFound';
import {Route, Redirect, Switch} from "react-router-dom";
import MovieForm from './component/movieForm';
import { importRoute } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <NavBar /><main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customer" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main></React.Fragment>
  );
}

export default App;
