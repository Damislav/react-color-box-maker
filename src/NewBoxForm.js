import React, { Component } from "react";
import uuid from "uuid/v4";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    this.setState({
      height: "",
      width: "",
      color: ""
    });
  }
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <div className='text-center'>
          <label htmlFor='color'>Color</label>
          <input
            className='form-control '
            type='text'
            name='color'
            value={this.state.color}
            onChange={this.handleChange}
            id='color'
          />
        </div>
        <div className='text-center'>
          <label htmlFor='width'>Width</label>
          <input
            className='form-control  '
            type='text'
            name='width'
            value={this.state.width}
            onChange={this.handleChange}
            id='width'
          />
        </div>
        <div className='text-center'>
          <label htmlFor='height'>Height</label>
          <input
             className='form-control ' 
            type='text'
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
            id='height'
          />
        </div>
        <div className='text-center'>
          <button className='btn btn-secondary text-center my-2'>Add New Box!</button>
        </div>
     
      </form>
    );
  }
}
export default NewBoxForm;
