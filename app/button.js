import React, { useState } from 'react';
import axios from 'axios'


const ClientSideButton = () => {
  const [clickCount, setClickCount] = useState(0);
//   const baseUrl = 'http://localhost:8889'

    const baseUrl = 'http://188.166.191.246:8080'

    const postData = {
        address: "123"
    }

    const header = {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': 'content-type',
        'Access-Control-Request-Method': 'POST',
        'Origin': 'http://localhost:3000'
    }

    try {
        const data = axios.post(baseUrl+'/api/v1/token', postData, header);
        console.log(data) 
    } catch (error) {
        console.log(error);
    }
  
  const handleClick = () => {
    setClickCount(clickCount + 1);
    


    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Client-Side Button Example</h1>
      <p>Click count: {clickCount}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};


export default ClientSideButton;