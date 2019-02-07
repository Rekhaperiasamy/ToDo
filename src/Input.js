import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import './App.css';

class Input extends Component {

  constructor(props) {
    super(props);
    this.count = 6;
    this.state = {
      todoItem: '',
      list: [{"name" :"Shopping"}, {"name" :"Sleeping"}, {"name" :"Cooking"}]
    };
}

handleChange = (e) => {
  this.setState({
      todoItem: e.target.value
  })
}

  onSubmit = (e) => {
   let refreshedList = this.state.list;
   refreshedList.push({"name": this.state.todoItem})
   this.setState({
      list: refreshedList
   });
 }

  render() {
    return (
      <div class="container">
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Todo List Name</label>
        <input type="text" name="todoitem" value ={this.state.name}
          onChange= {e => this.handleChange(e)}
          className="form-control"
          id="formGroupExampleInput"
        />
        <Button variant="info" onClick={(e) => this.onSubmit(e)}>Add to List</Button>
      </div>
       <ListGroup>
          {this.state.list.map((item)=>{
              return <ListGroup.Item><div><input type="checkbox" className="pull-right" /> {item.name} </div></ListGroup.Item>
          })}
      </ListGroup>
    </div>
    );
  }
}

export default Input;