import React,{Component} from 'react';
import {Panel} from 'primereact/panel';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {RadioButton} from 'primereact/radiobutton';

const initstate = {
    userName: '',
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

       let postData = {
        username:this.state.userName,
        userPassword:this.state.userPassword,
        userEmail:this.state.userEmail,
        userActivity:this.state.userActivity,
        userNote:this.state.userNote,
       }
       console.log(postData);
       fetch(`http://192.168.31.52:8080/networld/add_user`,{
           method:'POST',
           headers:{
            'Content-Type': 'application/json'
          },
           body: JSON.stringify(postData),
       })

       .then(function(response){
            return response.json()
       })

       .then(function(data){
            console.log("Data Successfully Submitted",data);
        })

        this.myForm.current.reset()
        this.setState({
        ... initstate
        })
       
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
                                <label htmlFor="userName">Username</label>
                                </div>
                                <InputText id="userName" value={this.state.userName} size="60" name="userName" onChange={ this.changeHandler } />
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
                                    <RadioButton id="active" value="true" name="userActivity" onChange={this.changeHandler} checked={this.state.userActivity === 'true'}  />
                                    <label htmlFor="active" className="p-radiobutton-label">Active</label>
                                </div>

                                <div className="p-col-md-12">
                                    <RadioButton id="inactive2" value="false" name="userActivity" onChange={this.changeHandler} checked={this.state.userActivity === 'false'} />
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