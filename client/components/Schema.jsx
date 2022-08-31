import React from 'react';
import axios from 'axios';

export default function Schema(props) {
  const values = Object.entries(props.schema);
  const { schema_id } = props;
  const components = [];

  for (let i = 0; i < values.length; i++) {
    const display = `${values[i][0]} : ${values[i][1]}`;
    components.push(<div className='schema'>{display}</div>);
  }

  const deleteSchema = async (id) => {
    console.log('Deleting Schema');
    await axios.delete(`http://localhost:3000/api/delete/${id}`);
    window.location.reload();
  };

  return (
    <div className='schema-container'>
      <div>Schema ID: {schema_id} </div>

      {components}
      <button
        onClick={() => {
          deleteSchema(schema_id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
