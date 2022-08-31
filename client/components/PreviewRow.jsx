import React, {useState} from 'react'

export default function PreviewRow(props) {
  const values = props.data;
  const components = [];
  for(let i = 0; i < values.length; i++) {
    components.push(<div className='previewrows'>{values[i]}</div>);
  }

  return (
    <div className="rowContainer">
     {components} 
    </div>
  )
}
