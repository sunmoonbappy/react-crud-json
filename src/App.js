import React,{Component} from 'react';

import { BrowserRouter,Route } from 'react-router-dom'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./Table.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Primeflex.css';


import Card from "./components/Card";
import Post from "./Form/Post";
import Table from "./Table";
import Edit from './Form/Edit';
import Navigation from "./components/Navigation";

class App extends React.Component{
    render(){
      return(
        <div className="content-section introduction">
          <BrowserRouter>
            <Route path="/" component={Navigation} />
            <Route path="/table" component={Table} />
            <Route path="/add-user" component={Post} />
            <Route path="/edit-user" component={Edit} />
          </BrowserRouter>   
          
        </div>
      )
    }

}

export default App;