import React, { useState } from 'react';
import axios from 'axios'


const ClientSideButton = () => {
	axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 随便写个值 绕过if判段
  if (config.method == 'get') {
    config.data = true
  }
  config.headers['content-type'] = 'application/json',
config.headers['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHg4OUI2YjQwQjA2MjYyNDE0YkQzRkJGNzc3ODgwQjZFYmRkMjYxNzZiIiwidXNlcm5hbWUiOiIiLCJ1aWQiOjIsImlzcyI6ImRleC1wZXJ0Iiwic3ViIjoiZGV4LXBlcnQtand0IiwiYXVkIjpbImRleC1wZXJ0Il0sImV4cCI6MTcwMjI4NjUxNiwibmJmIjoxNzAyMjgyOTE2LCJpYXQiOjE3MDIyODI5MTZ9.6k2fCagqG7w4WTvweBQg7exnxa7JyrRhwKkeL1KVyB4'
 
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});



  const [clickCount, setClickCount] = useState(0);
	
    const baseUrl1 = 'http://localhost:8080'
    const baseUrl2 = 'http://188.166.191.246:8080'

    const postData = {
        address: "123"
    }

    const header1 = {
	'Content-Type': 'application/json',
        'Access-Control-Request-Headers': 'content-type',
        'Access-Control-Request-Method': 'GET, POST',
        'Origin': 'http://localhost:3000',
	'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHg4OUI2YjQwQjA2MjYyNDE0YkQzRkJGNzc3ODgwQjZFYmRkMjYxNzZiIiwidXNlcm5hbWUiOiIiLCJ1aWQiOjIsImlzcyI6ImRleC1wZXJ0Iiwic3ViIjoiZGV4LXBlcnQtand0IiwiYXVkIjpbImRleC1wZXJ0Il0sImV4cCI6MTcwMjI4NjUxNiwibmJmIjoxNzAyMjgyOTE2LCJpYXQiOjE3MDIyODI5MTZ9.6k2fCagqG7w4WTvweBQg7exnxa7JyrRhwKkeL1KVyB4'
    }

    try {
        //const data = axios.get(baseUrl+'/api/v1/auth-ping', postData, header);
        const data = axios.get(baseUrl2+'/api/v1/auth-ping', null, header1);
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
