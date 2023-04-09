import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";



function GalleryItem({ photo, index, flippedIndex, handleFlip }) {
    const [likeCount, setLikeCount] = useState(photo.likes);
  
    const handleLike = () => {
      setLikeCount(prevLikeCount => prevLikeCount + 1);
    };

    return (
        <div>

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
                  }}>{likeCount} Likes
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
                  }}>{likeCount} Likes
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

        </div>
    )
}

export default GalleryItem;