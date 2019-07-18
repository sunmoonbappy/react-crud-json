import React,{Component} from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';

import { Link,NavLink } from 'react-router-dom';

class Navigation extends React.Component{
    render(){
        return(
            <div>

                <Toolbar>
                <div className="p-toolbar-group-left">
                    <Link to="/">
                    <Button label="Back to Home" icon="pi pi-arrow-left" className="p-button-primary" /></Link>
                </div>

                <div className="p-toolbar-group-right">
                    <Link to="/add-user"><Button label="Add New" icon="pi pi-plus" className="p-button-success" style={{"marginRight" : '1.5em'}} /></Link>
                    <Link to="/edit-user"><Button label="Edit User" icon="pi pi-plus" className="p-button-success" style={{"marginRight" : '1.5em'}} /></Link>
                    <Link to="/table"><Button label="Table" className="p-button-info" /></Link>
                </div>
                </Toolbar>
            </div>
        )
    }
}

export default Navigation;