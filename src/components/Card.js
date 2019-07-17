import React,{Component} from 'react';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

const initstate = {
    username: '',
    email: '',
    password: '',
    description: '',
    country: '',
    gender: '',
    skills: [],
}

class App extends React.Component{

   constructor(){
     super()
     this.myForm = React.createRef()
   }

  state = initstate;

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.myForm.current.reset()
    this.setState({
      ... initstate
    })
  }

    render(){
      return(
        <div>
          <form ref={this.myForm} onSubmit={this.submitHandler}>
          <div className="card-form mt-2">
            
            <div className="panel panel-default bg-light p-2">
            <div className="offset-md-3 col-md-6">
                <div className="panel-body">

                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input 
                        type="text"
                        name="username" 
                        className="form-control" 
                        placeholder="Enter your Name"
                        value={this.state.username} 
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email"
                        name="email" 
                        className="form-control" 
                        placeholder="Enter your Email" 
                        value={this.state.email}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input 
                        type="password"
                        name="password" 
                        className="form-control" 
                        placeholder="Enter your Password" 
                        value={this.state.password}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Enter Description</label>
                      <textarea 
                        type="textarea"
                        name="description" 
                        className="form-control" 
                        placeholder="Enter your Description" 
                        value={this.state.description}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <button className="btn btn-success" type="submit">Register</button>

                  </div>
              </div>
            </div>

        </div>
          </form>
        </div>
      )
    }

}

export default App;