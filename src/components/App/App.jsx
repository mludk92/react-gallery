import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ReactCardFlip from "react-card-flip";

function App() {
    const [gallery, setGallery] = useState([])
    const [flippedIndex, setFlippedIndex] = useState(-1);

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

    const handleFlip = (index) => {
        setFlippedIndex(index === flippedIndex ? -1 : index);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {gallery.map((photo, index) => (
          <div key={photo.id}>
            <ReactCardFlip isFlipped={flippedIndex === index} 
            flipDirection="vertical">
            <div style={{
                width: '250px',
                height: '250px',
                backgroundImage: `url(${photo.path})`,
                backgroundSize:'cover',
                backgroundPosition: 'center top',
                fontSize: '40px',
                color: 'green',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                <br />
                <br />
                <button style={{
                width: '100px',
                fontSize: '20px',
                background: 'white',
                fontWeight: 'bold',
                borderRadius: '5px',
                position: 'absolute',
                bottom: '10px',
                left: '30px'
                }} onClick={() => handleFlip(index)}>
                    Flip</button>
            </div>
            <div style={{
                width: '300px',
                height: '300px',
                background: 'darkgray',
                fontSize: '15px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                <h1>{photo.title}</h1>
                {photo.description}
                <br />
                <button style={{
                width: '100px',
                fontSize: '20px',
                background: 'white',
                fontWeight: 'bold',
                borderRadius: '5px',
                position: 'absolute',
                bottom: '10px',
                left: '30px'
                }} onClick={() => handleFlip(index)}>
                    Flip</button>
            </div>
        </ReactCardFlip>
          </div>
        ))}
        
      </div>
    );
  }
  

export default App;
