import React from 'react';
import './App.css';
//importing useState
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import GalleryList
import GalleryList from './GalleryList/GalleryList';
function App() {

  useEffect(() => {
    getImages();
  }, []);

  const [galleryList, setGalleryList] = useState([]);
  const [idClicked, setIdClicked] = useState(-1);

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
    });
  };

  const like = ({image}) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${image.id}`,

    })
    .then((res) => {
      console.log('Like PUT success');
      getImages();
    })
    .catch((err) => {
      console.error('like PUT failed ', err);
    })
  }

  function handleClick(imageId){
    setIdClicked(imageId === idClicked ? -1 : imageId);
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList = {galleryList} like = {like} handleClick={handleClick} idClicked = {idClicked}/>
      </div>
    );
}

export default App;
