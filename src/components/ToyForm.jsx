import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: "",
    likes: 0
  }

  nameChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // imgChangeHandler = (e) => {
  //   this.setState({
  //     imgValue: e.target.value
  //   })
  // }

  formSubmit = (e) => {
    e.preventDefault()
    this.props.submitter(this.state)
    this.setState({
      name: "",
      image: "",
      likes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.formSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.nameChangeHandler} value={this.state.name}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.nameChangeHandler} value={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
