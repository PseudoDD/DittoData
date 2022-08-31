import React from 'react'

export default function Schema(props) {
  const values = Object.entries(props.schema);
  const components = [];
  for(let i = 0; i < values.length; i++) {
    const display =  `${values[i][0]} : ${values[i][1]}`;
    components.push(
      <div className='schema'>
        {display}
      </div>);
  };

  return (
    <div className="schema-container">
      <h4>Schema Number: {props.schemaNumber}</h4>
      {components}
    </div>
  )
}
