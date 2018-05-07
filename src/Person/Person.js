import React from 'react';

const person = props => {
  return (
    <p>
      i'm {props.name} and am {props.age} years old
    </p>
  );
};

export default person;
