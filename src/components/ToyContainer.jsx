import React from 'react';
import ToyCard from './ToyCard'

const getToys = (props) => {
  return props.toys.map(el => <ToyCard key={el.id} toy={el} clickHandler={props.clickHandler}/>)
}

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {getToys(props)}
    </div>
  );
}

export default ToyContainer;
