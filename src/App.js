import React,{Component} from 'react';
import './Table.css';

class App extends React.Component{

constructor(props){
  super();
  this.state = {
    items:[],
    isloaded:false,
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(json => {
    this.setState({
      isloaded:true,
      items:json,
    })
  });
}

  render(){
    var { isloaded,items} = this.state;
    if(!isloaded){
      return <div>Loading ...</div>
    }
    else{
      return (
        <div className="App">
          <table>
            <thead>
            <th>
              <td>ID</td>
              <td>Title</td>
              <td>body</td>
            </th>
            </thead>
            <tbody>
              {items.map(item =>(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))};
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default App;