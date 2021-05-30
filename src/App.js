import React, { Component } from 'react';
import logo from './logo.svg';
import {Route, Redirect, Switch } from 'react-router-dom';
import Customers from './component/customers';
import Rentals from './component/rentals';
import NotFound from './component/notFound';
import Movies from './component/movies';
import NavBar from './component/navBar';
import MovieForm from './component/movieForm';
import LoginForm from './component/loginForm';
import './App.css';

class App extends Component{
  render(){
    return (
      <React.Fragment>

       <NavBar/>

       <main className = "container">

        <Switch> 
          
        <Route path = "/login" component =  {LoginForm}/>
        <Route path =  "/movies/:id" component = {MovieForm}/>
        <Route path = "/movies" component =  {Movies}/>
        <Route path = "/customers" component = {Customers}/> 
        <Route path = "/rentals " component = {Rentals}/> 
        <Route path = "/not-found" component = {NotFound}/> 
        <Redirect from = "/" exact to = "/movies"/> 
        <Redirect to = "/not-found"/>
        </Switch> 
      
        </main>
        
        </React.Fragment>
    )
  }
}

export default App;
