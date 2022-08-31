import React, { useEffect, useState } from 'react'
import Row from './PreviewRow.jsx'

export default function PreviewDisplay(props) {
  const [rows, setRows] = useState([]);
  const [showPreview, setShowPreview] = useState(true);

  useEffect( () => {
    console.log('hi from preview display');
    //console.log(JSON.stringify(props.dummyData));
    const previewData = props.dummyData.slice(0, 100);
    const componentsArray = [];
    for(let i = 0; i < previewData.length; i++) {
      if(i === 0) {
        const header = <Row data={Object.keys(previewData[i])} />
        componentsArray.push(header);
      }
      const newRow = <Row data={Object.values(previewData[i])} />
      componentsArray.push(newRow);
    };
    setRows(componentsArray);
  },[props.dummyData]);

  const handlePreviewData = () => {
    console.log('handling preview data');
    setShowPreview(true);
  };

  const handleJSONData = () => {
    console.log('handling JSON data');
    setShowPreview(false);
  };


  if(showPreview) {
    return (
      <div className="outer-previewDisplayContainer">
        
        <h2>Preview Display</h2>
        <div className="previewDisplayContainer">
          {rows}
        </div>
        <span id='preview-buttons'>
            <button onClick={handlePreviewData}>Preview Data</button>
            <button onClick={handleJSONData}>JSON Data</button> 
        </span>
      </div>
    )
  }else if(!showPreview) {
    return (
      <div className="outer-previewDisplayContainer">
        <h2>JSON Data</h2>
        <div className="previewDisplayContainer">
          {JSON.stringify(props.dummyData)}
        </div>
        <span id='preview-buttons'>
            <button onClick={handlePreviewData}>Preview Data</button>
            <button onClick={handleJSONData}>JSON Data</button> 
        </span>
      </div>
    )
  }
}
