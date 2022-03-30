import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const styleObj = {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#ffffff",
    textAlign: "left",
    paddingTop: "15px",
    margin: "20px"
}

const imageUrl = "https://dummyjson.com/image/i/products/1/1.jpg";
const [img, setImg] = useState();

const fetchImage = async () => {
  const res = await fetch(imageUrl);
  const imageBlob = await res.blob();
  const imageObjectURL = URL.createObjectURL(imageBlob);
  setImg(imageObjectURL);
};

useEffect(() => {
  fetchImage();
}, []);

// const thumbnailUrl = "https://dummyjson.com/image/i/products/1/thumbnail.jpg";
// const [thumbnail, setThumbnail] = useState();

//   const fetchThumbnail = async () => {
//   const res = await fetch(thumbnailUrl);
//   const imageBlob = await res.blob();
//   const imageObjectURL = URL.createObjectURL(imageBlob);
//   setThumbnail(imageObjectURL);
// };

// useEffect(() => {
//   fetchThumbnail();
// }, []);


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
          <>
           <img src={img} alt="icons" />
          </>
          <p style={styleObj}>id : {data.id}</p>
          <p style={styleObj}>title : {data.title}</p>
          <p style={styleObj}>description : {data.description}</p>
          <p style={styleObj}>category : {data.category}</p>
          <p style={styleObj}>brand : {data.brand}</p>
          <p style={styleObj}>price : {data.price}</p>
         
          </div>
      </div>
  );
}

export default App;
