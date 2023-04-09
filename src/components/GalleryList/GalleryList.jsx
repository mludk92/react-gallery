
import GalleryItem from '../GalleryItem/GalleryItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function GalleryList({ gallery, flippedIndex, handleFlip, handleLike }) {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {gallery.map((photo, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                <GalleryItem
                  key={photo.id}
                  photo={photo}
                  index={index}
                  flippedIndex={flippedIndex}
                  handleFlip={handleFlip}
                  handleLike={handleLike}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  }
  
  export default GalleryList;
