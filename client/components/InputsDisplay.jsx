import React, { useState, useEffect } from 'react'
import Input from './Input.jsx'
import axios from 'axios'

export default function InputsDisplay(props) {
  const [inputs, setInputs] = useState([]);  
  const [inputNumber, setInputNumber] = useState(0);
  const [inputComponents, setinputComponents] = useState([]);

  useEffect(() => {
    const initialArray = [];
    let counter = 0;
    while(counter !== 4) {
      const newInput = <Input id={counter} inputs={inputs} setInputs={setInputs}/>;
      initialArray.push(newInput);
      counter++;
    }
    setInputNumber(4);
    setinputComponents([...initialArray]);
  }, []);

  const handleAddField = ()=> {
    const newInput = <Input id={inputNumber} inputs={inputs} setInputs={setInputs}/>;
    setinputComponents([...inputComponents, newInput]);
    let newInputNumber = inputNumber;
    newInputNumber++;
    setInputNumber(newInputNumber);
  };

  const handleCreateSchema = ()=> {
    console.log('handling create schema:', inputs);
    const data = {
      schemaColumns: {},
      user_id: 2
    }

    for(let obj of inputs) {
      const val = Object.entries(obj.value);
      const fname = val[0][0];
      const ftype = val[0][1];
      data.schemaColumns[fname] = ftype;
    }
    
    axios.post('http://localhost:3000/api/add', data)
      .then((res) => props.setDummyData(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="outer-inputs-container">
          <h2>Create your schema here!</h2>
        <div id='inputs-container'>
          <div className='inner-inputs-container'>
          {inputComponents}
          </div>
        </div>
        <span id='input-buttons'>
          <button onClick={handleAddField}>Add Field</button>
          <button onClick={handleCreateSchema}>Create Schema</button> 
        </span>
      </div>
    </>
  );
}
