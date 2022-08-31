import React, { useState, useEffect, useRef } from 'react'
import '../assests/styles.css'

export default function Input(props) {
  const [fname, setfname] = useState('');
  const [ftype, setftype] = useState('');

  const initial = useRef(true);
  useEffect(() => {
    if(!initial.current) {
      const row = { id: props.id, value: {} };
      row.value[fname] = ftype;
      let found = false;
     
      for(let i = 0; i < props.inputs.length; i++) {
        if(props.inputs[i].id === props.id) {
          props.inputs[i] = row;
          found = true;
          break;
        }    
      }
      if(!found) {
        const newInputsArray = props.inputs;
        newInputsArray.push(row);
        props.setInputs(newInputsArray);
      }
    }
    else(initial.current = false);
  }, [fname, ftype]);

  return (
    <div className='inputElementsContainer'>
      <div className='inputElement'>
        <label for='fname'>Field name:</label> <br/>
        <input type='text' id='fname' name='fname' 
          onChange = {e => setfname(e.target.value)} /> <br/>
      </div>
      <div className='inputElement'>
        <label for='fname'>Field type:</label> <br/>
        <select id='ftype' name='ftype' onChange={e => setftype(e.target.value)}>
          <option></option>
          <option value='name'>First Name</option>
          <option value='name'>Last Name</option>
          <option value='email'>Email</option>
          <option value='cc_num'>Credit Card Number</option>
          <option value='cc_expire'>Credit Card Expiration Date</option>
          <option value='trans_date'>Transaction Date</option>
          <option value='bank'>Bank</option>   
        </select>
      </div>
    </div>
  )
}
