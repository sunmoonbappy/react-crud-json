import React,{Component} from 'react';
import {Panel} from 'primereact/panel';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {RadioButton} from 'primereact/radiobutton';
import axios from 'axios';
const Base_URL ='http://192.168.31.52:8080/networld/add_user';

const initstate = {
    username: '',
    userPassword:'',
    userEmail:'',
    userActivity:'',
    isSubmitted:false,
}

class Post extends React.Component{

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
       axios.post(`{Base_URL}/posts`,{
           username:this.state.username,
           userPassword:this.state.userPassword,
           userEmail:this.state.userEmail,
           userActivity:this.state.userActivity,
       })
       .then(res =>{
           this.setState({
               isSubmitted:true,
           })
           console.log(res)
       })
       .catch()
       
     }

    render(){
        return(
            <div className="content-section implementation">
                <Panel header="Register As User">
                    <div children="p-grid">
                        <div className="p-offset-3 p-col-md-6">

                        <form ref={this.myForm} onSubmit={this.submitHandler} >

                            <div className="mb-15">
                                <div className="p-col-md-12">
                                <label htmlFor="username">Username</label>
                                </div>
                                <InputText id="username" value={this.state.username} size="60" name="username" onChange={ this.changeHandler } />
                            </div>

                            <div className="mb-15">
                                <div className="p-col-md-12">
                                    <label htmlFor="userPassword">User Password</label>
                                </div>
                                <InputText id="userPassword" value={this.state.userPassword} size="60" name="userPassword" onChange={ this.changeHandler } />
                            </div>

                            <div className="mb-15">
                                <div className="p-col-md-12">
                                    <label htmlFor="userEmail">User Email</label>
                                </div>
                                <InputText id="userEmail" value={this.state.userEmail} size="60" name="userEmail" onChange={ this.changeHandler } />
                            </div>

                            <div className="mb-15">
                                <div className="p-col-md-12">
                                    <label htmlFor="userNote">User Note</label>
                                </div>
                                
                                <div className="p-col-md-12">
                                    <RadioButton id="active" value="active" name="userActivity" onChange={this.changeHandler} checked={this.state.userActivity === 'active'}  />
                                    <label htmlFor="active" className="p-radiobutton-label">Active</label>
                                </div>

                                <div className="p-col-md-12">
                                    <RadioButton id="inactive2" value="inactive" name="userActivity" onChange={this.changeHandler} checked={this.state.userActivity === 'inactive'} />
                                    <label htmlFor="inactive2" className="p-radiobutton-label">InActive</label>
                                </div>
                                
                            </div>

                            <div className="mb-15">
                                <div className="p-col-md-12">
                                    <label htmlFor="userNote">User Note</label>
                                </div>
                                <InputTextarea rows={5} cols={60} id="userNote" value={this.state.userNote} size="60" name="userNote" onChange={ this.changeHandler } />
                            </div>

                            <Button label="Register" type="submit" />

                            {this.state.isSubmitted && <p>Form Submitted Successfully</p> }

                        </form>
                        </div>
                    </div>
                </Panel>
            </div>
        )
    }
}

export default Post;