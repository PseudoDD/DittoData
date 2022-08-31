import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Schema from './Schema.jsx'

export default function SchemasDisplay() {
  const [schemas, setSchemas] = useState({});

  const data = { user_id: 2 };
  
  useEffect(() => {
    axios.post('http://localhost:3000/api', data)
    .then((res) => setSchemas(res.data))
    .catch((err) => console.log(err));
  },[])
  
  const componentsArray = [];
  for(let i = 0; i < schemas.length; i++) {
    const newSchema = <Schema schemaNumber={i} schema={schemas[i].schemacolumns} />
    componentsArray.push(newSchema);
  };
  
  return (
    <div className='outer-schema-display'>
      <h2>Your Schemas</h2>
      {componentsArray}
    </div>
  )
}
