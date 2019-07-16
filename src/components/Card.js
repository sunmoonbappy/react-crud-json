import React,{Component} from 'react';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

class App extends React.Component{
    render(){
      return(
        <div className="card-form">
         <Card>
         <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">Username</label>
        </span>
        <span className="p-float-label">
            <InputText id="password" />
            <label htmlFor="password">Password</label>
        </span>
        <span className="p-float-label">
            <InputText id="userNote" />
            <label htmlFor="userNote">User Note</label>
        </span>
        <Button label="Danger" className="p-button-raised p-button-success" />
        </Card>
        </div>
      )
    }

}

export default App;