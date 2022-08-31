import React, { useState, useEffect } from 'react';
import Input from './Input.jsx';

export default function InputsDisplay() {
  const [inputs, setInputs] = useState([]);
  const [inputNumber, setInputNumber] = useState(0);
  const [inputComponents, setinputComponents] = useState([]);

  useEffect(() => {
    const initialArray = [];
    let counter = 0;
    while (counter !== 4) {
      const newInput = (
        <Input id={counter} inputs={inputs} setInputs={setInputs} />
      );
      initialArray.push(newInput);
      counter++;
    }
    setInputNumber(4);
    setinputComponents([...initialArray]);
  }, []);

  const handleAddField = () => {
    console.log('handlingAddField');
    const newInput = (
      <Input id={inputNumber} inputs={inputs} setInputs={setInputs} />
    );
    setinputComponents([...inputComponents, newInput]);
    let newInputNumber = inputNumber;
    newInputNumber++;
    setInputNumber(newInputNumber);
  };

  const handleCreateSchema = () => {
    console.log(inputs);
  };

  return (
    <>
      <div id='inputs-container'>
        <h1>Create your schema here!</h1>
        {/* <Input id='0' inputs={inputs} setInputs={setInputs}/>
        <Input id='1' inputs={inputs} setInputs={setInputs}/>
        <Input id='2' inputs={inputs} setInputs={setInputs}/>
        <Input id='3' inputs={inputs} setInputs={setInputs}/> */}
        {inputComponents}
      </div>
      <div id='input-buttons'>
        <button onClick={handleAddField}>Add Field</button>
        <button onClick={handleCreateSchema}>Create Schema</button>
      </div>
    </>
  );
}
