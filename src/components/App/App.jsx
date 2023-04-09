import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [gallery, setGallery] = useState([])
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [likeCount, setLikeCount] = useState(0);

  // Axios GET Request to get photos from the server
  const getGallery = () => {
    axios.get('/gallery').then((response) => {
      setGallery(response.data);
    }).catch((error) => {
      console.log(`Error in GET ${error}`);
    })
  };

  useEffect(() => {
    getGallery();
  }, []);
// function to flip card, and set state to -1 to flip back
  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? -1 : index);
  }
//function to add like to photo, and set state to +1
  const handleLike = (index) => {setLikeCount(likeCount + 1)}

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Mitch's Photo Gallery</h1>
      </header>
      <GalleryList gallery={gallery} 
      flippedIndex={flippedIndex} 
      handleFlip={handleFlip} 
      handleLike={handleLike} 
      likeCount={likeCount}
      />
    </div>
  );
}

export default App;
