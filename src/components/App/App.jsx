import React from 'react';
import './App.css';
//importing useState
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';

function App() {

  useEffect(() => {
    getImages();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  const getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((res) => {
      console.log('Images received: ', res.data);

      setGalleryList(res.data);
    })
    .catch((err) => {
      console.error('Error retrieving images: ', err);
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
