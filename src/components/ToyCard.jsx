import React, { Component } from 'react';

class ToyCard extends Component {

  clicker = (e) => {
    // console.log(e.target)
    this.props.clickHandler(this.props.toy.id)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn" onClick={this.clicker}>Donate to GoodWill</button>
      </div>
    );
  }
}

export default ToyCard;
