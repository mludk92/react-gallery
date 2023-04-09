import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
    const [gallery, setGallery] = useState([])

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


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {gallery.map((photo) => (
          <div key={photo.id}>
            <img src={photo.path} alt={photo.title} style={{ maxWidth: '300px', maxHeight: '300px' }} />
            <p>{photo.title}</p>
            <p>{photo.description}</p>
            <p>{photo.likes} likes</p>
          </div>
        ))}
      </div>
    );
  }
  

export default App;
