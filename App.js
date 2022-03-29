import { useEffect, useState } from 'react';
import './App.css';


function App() {

   const styleObj = {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "50px",
}

  const url = 'https://dummyjson.com/products/1';
  const [data , setData] = useState({})


  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res))
    .catch(error=> console.log(error.message))
  } , [])

useEffect(()=>{
  console.log(data);
} , [data])

  return (
    <div className="App">
      <div>
        <p style={styleObj}>id : {data.id}</p>
        <p style={styleObj}>title : {data.title}</p>
        <p style={styleObj}>description : {data.description}</p>
        <p style={styleObj}>category : {data.category}</p>
        {/* <p>images : {data.images[0]}</p> */}
      </div>
    </div>
  );
}

export default App;
