import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(resp => this.setState({
      toys:resp
    }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  submitHandler = (newToy) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "applicatin/json"
      },
      body: JSON.stringify(newToy)
    }
    fetch("http://localhost:3000/toys", options)
    .then(resp => resp.json())
    .then(newToy => this.setState({
      toys: [...this.state.toys, newToy]
    }))
  }

  clickHandler = (id) => {
    // let deleted = this.state.toys.find(el => el.id === id)
    // console.log(deleted)
    // let foundIdx = this.state.toys.indexOf(deleted)
    // console.log(foundIdx)
    // let newArr = this.state.toys.splice(foundIdx, 1)
    // console.log(newArr)
    const options = {
      method: "DELETE"
    }
    fetch("http://localhost:3000/toys/" + id, options)
    .then(resp => resp.json())
    .then(id => {
      let newArr = [...this.state.toys]
      newArr.splice(newArr.indexOf(id), 1)
      this.setState({
        toys: newArr
      })
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitter={this.submitHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} clickHandler={this.clickHandler}/>
      </>
    );
  }

}

export default App;
