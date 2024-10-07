import * as React from 'react';

import { useState } from 'react';
import { Card, Typography, CardActionArea, CardMedia, CardContent, CardActions, IconButton    } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Testimonio({ imageUrl, userName, userLocation, description, content, alt }) {
  const [like, setLike] = useState(false);



  const toggleLike = () => {
    setLike(!like); 
  };

  return (
    <Card sx={{ width:"100%" }}>
      <CardActionArea>
      <CardMedia
        sx={{ height: 140,width: '100%', height: '300px', overflow: 'hidden'  }}
        image={imageUrl}
        alt={alt}
        title={userName}
      />
      
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {userName}, {userLocation}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={toggleLike} aria-label="add to favorites">
          {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
   
      </CardActions>
    </Card>
  );
}

