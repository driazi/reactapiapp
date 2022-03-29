import {useEffect, useState} from 'react';
import './App.css';

function App() {
const url='https://dummyjson.com/products/1';
const [data, setData] = useState({})

useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(res => setData(res))
  .catch(error => console.log(error.message))
} , [])


useEffect(()=>{
  console.log(data);
} , [data])


  return (
      <div className="App">
        <div>
         <p style={{ color: "red" }}> title:  {data.title}</p>
         <p style={{ color: "blue" }}> Id : {data.id}</p>
        </div>
      </div>
  );
}

export default App;
