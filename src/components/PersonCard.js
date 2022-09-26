import React, { Component } from 'react'

class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      newAge: this.props.age
    };
  }
  addOneYear=()=>{
    this.setState({ newAge: this.state.newAge+1 });
  }
  render() {
    const { firstName, lastName, hairColor } = this.props
    const { newAge } = this.state
    return (
      <div className='person-card'>
        <h1>
          { lastName }, {firstName}
        </h1>
        <p>Age: { newAge }</p>
        <p>Hair Color: { hairColor }</p>
        <button onClick={ this.addOneYear }>Birthday Button for { firstName } {lastName}</button>
      </div>
    )
  }
}

export default PersonCard;
