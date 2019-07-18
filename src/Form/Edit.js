import React,{Component} from 'react';
import { async } from 'q';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {RadioButton} from 'primereact/radiobutton';



class TableList extends React.Component{
     constructor(props){
         super(props);
         this.state ={
             items:[],
         }
         this.jsondata = this.jsondata.bind(this)
         this.actionTemplate = this.actionTemplate.bind(this);
     }

    componentDidMount(){
        this.jsondata();
      }    

      async jsondata(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url)
        .then(res => res.json()); 
        console.log(response);
        this.setState({ items : response  });
    }

    actionTemplate(rowData, column) {

        return <div>
            <Button type="button" icon="pi pi-trash" className="p-button-success" style={{marginRight: '.5em'}} onClick={this.deleteOwner}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning" onClick={(e) => {
                this.setState({visible: true})
                
                this.setState({
                    title: rowData.title,
                    body:rowData.body,
                })
     
            }} ></Button>
        </div>;
    }



    render(){
        let paginatorLeft = <Button icon="pi pi-refresh"/>;
        let paginatorRight = <Button icon="pi pi-cloud-upload"/>;
        let header =<div style={{'textAlign':'left'}}>
            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
            <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/><span><i className="pi pi-plus" style={{margin:'4px 4px 0 0',float:'right'}}></i></span>
        </div>;
        var footer = <div className="p-clearfix">"These are 900+ users"</div>
        return (
            <div>
        
          <div className="content-section introduction">    

            <DataTable value={this.state.items} paginator={true} paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rows={10}  footer={footer} >
                <Column field="userId" header="userId"  />
                <Column field="title" header="title" />
                <Column field="body" header="body"  />
                <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
            </DataTable>

            <Dialog header="User Information" visible={this.state.visible} style={{width: '50vw'}} modal={true} onHide={() => this.setState({visible: false})}>

        <form ref={this.myForm} onSubmit={this.submitHandler}>
          <div className="card-form mt-2">
                
                <div className="panel panel-default bg-light p-2">
                    <div className="panel-body">

                        <div className="form-group">
                        <label htmlFor="username">Title</label>
                        <input 
                            type="text"
                            name="title" 
                            className="form-control" 
                            value={this.state.title} 
                            onChange={this.changeHandler}
                        />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Enter Description</label>
                            <textarea 
                                type="textarea"
                                name="body" 
                                className="form-control" 
                                value={this.state.body}
                                onChange={this.changeHandler}
                            />
                            </div>

                        <button className="btn btn-success" type="submit">Update</button>

                    </div>
                </div>

            </div>
          </form>

            </Dialog>

        </div>


        </div>
        );


    }

}

export default TableList;