import React,{Component} from 'react';
import { async } from 'q';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {RadioButton} from 'primereact/radiobutton';

import './Table.css';


class TableList extends React.Component{
     constructor(props){
         super(props);
         this.state ={
             items:[]
         }
         this.jsondata = this.jsondata.bind(this)
         this.userTemplate = this.userTemplate.bind(this);
         this.actionTemplate = this.actionTemplate.bind(this);
     }

    componentDidMount(){
        this.jsondata();
      }    

      async jsondata(){
        const url = "http://192.168.31.52:8080/networld/list_of_user";
        const response = await fetch(url)
        .then(res => res.json()); 
        console.log(response);
        this.setState({ items : response  });
    }

    userTemplate(rowData, column) {
        console.log(rowData);
        let value;
            if(rowData.userActivity){
                value ='True'
            }else{
                value='false'
            }
        return value
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning" onClick={(e) => this.setState({visible: true})} ></Button>
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
            {/* <button onClick={this.jsondata}>click me</button> */}
            {/* <table>
            <thead>
            <th>
              <td>ID</td>
              <td>User Password</td>
              <td>Name</td>
              <td>Email</td>
              <td>Activity</td>
              <td>Note</td>
            </th>
            </thead>
            <tbody>
              {this.state.items.map(item =>(
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.userPassword}</td>
                  <td>{item.userName}</td>
                  <td>{item.userEmail}</td>
                  <td>{item.userActivity.toString()}</td>
                  <td>{item.userNote}</td>
                </tr>
              ))};
            </tbody>
          </table> */}
        
          <div className="content-section introduction">    

            <DataTable value={this.state.items} paginator={true} paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rows={10} header={header} footer={footer} globalFilter={this.state.globalFilter}>
                <Column field="userId" header="userId" sortable={true} filter={true} />
                <Column field="userPassword" header="userPassword" sortable={true}  filter={true} />
                <Column field="userName" header="userName" sortable={true} filter={true} />
                <Column field="userActivity" header="userActivity" body={this.userTemplate} filter={true}  />
                <Column field="userNote" header="userNote" sortable={true} filter={true} />
                <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
            </DataTable>

            <Dialog header="User Information" visible={this.state.visible} style={{width: '50vw'}} modal={true} onHide={() => this.setState({visible: false})}>
               
            </Dialog>

        </div>


        </div>
        );


    }

}

export default TableList;