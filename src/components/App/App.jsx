import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ReactCardFlip from "react-card-flip";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
// function to flip card, and set state to -1 to flip back
  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? -1 : index);
  }
  const [likeCount, setLikeCount] = useState(0);
//function to add like to photo, and set state to +1
  const handleLike = (index) => {setLikeCount(likeCount + 1)}

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Mitch's Photo Gallery</h1>
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {gallery.map((photo, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
              <ReactCardFlip isFlipped={flippedIndex === index} flipDirection="vertical">
                <div style={{
                  width: '250px',
                  height: '250px',
                  backgroundImage: `url(${photo.path})`,
                  backgroundSize: 'cover',
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
                    Flip
                  </button>
                  <button style={{
                    width: '100px',
                    fontSize: '20px',
                    background: 'white',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    position: 'absolute',
                    bottom: '40px',
                    left: '30px'
                  }} onClick={() => handleLike(index)}>
                    Like
                  </button>
                  <div  style={{
                    width: '100px',
                    fontSize: '20px',
                    background: 'white',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    position: 'absolute',
                    top: '10px',
                    left: '30px'
                  }}>{likeCount}
                 </div>
                </div>
                <div style={{
                  width: '250px',
                  height: '250px',
                  background: 'darkgray',
                  fontSize: '15px',
                  color: 'black',
                  margin: '20px',
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  padding: '20px'
                }}>
                  <h1>{photo.title}</h1>
                  {photo.description}
                  <br />
                  <div  style={{
                    width: '100px',
                    fontSize: '20px',
                    background: 'white',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    position: 'absolute',
                    top: '10px',
                    left: '30px'
                  }}>{likeCount}
                 </div>
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
                    Flip
                  </button>
                </div>
              </ReactCardFlip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
