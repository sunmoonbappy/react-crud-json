import React,{Component} from 'react';

import { BrowserRouter,Route } from 'react-router-dom'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./Table.css";


import Card from "./components/Card";
import Table from "./Table";
import Navigation from "./components/Navigation";

class App extends React.Component{
    render(){
      return(
        <div className="content-section introduction">
          <BrowserRouter>
            <Route path="/" component={Navigation} />
            <Route path="/table" component={Table} />
            <Route path="/add-user" component={Card} />
          </BrowserRouter>   
          
        </div>
      )
    }

}

export default App;