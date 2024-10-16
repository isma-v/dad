import * as React from 'react';

import { useState } from 'react';
import { Card, Typography, CardActionArea, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModalDialog from '../components1/myfavourite/ModalDialog';

import MyFavourite from '../components1/myfavourite/MyFavourite';
import MyFavouriteBorder from '../components1/myfavourite/MyFavouriteBorder';
import MyButton from '../components1/mybutton/MyButton';
import IsmaelVH from '../components1/myfavourite/IsmaelVH';


export default function Testimonio({ imageUrl, userName, userLocation, description, content, alt }) {
  const [like, setLike] = useState(false);

  const [following, setFollowing] = useState(false);


  const toggleLike = () => {
    setLike(!like);
  };
  const toggleFollow = () => {
    setFollowing(!following);
  };

 

  //eventos de ModalDialog

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 140, width: '100%', height: '300px', overflow: 'hidden' }}
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



        {like ? <MyFavourite iconColor="error" onClick={toggleLike} /> :
          <MyFavouriteBorder onClick={toggleLike} />}


        <IsmaelVH onClick={handleClickOpen} onCommentSubmit={handleClickOpen} />
        <ModalDialog open={open} handleClose={handleClose}/>

        {following ?
          <MyButton
            isFollowing={following}
            textColor="#1DA1F2"
            backgroundColor="transparent"
            borderWidth="2px"
            size="medium"
            textColorHover="white"
            backgroundColorHover="#FF3E41"
            onClick={toggleFollow}
          >
            Siguiendo
          </MyButton>
          :
          <MyButton
            isFollowing={following}
            textColor="white"
            backgroundColor="#1DA1F2"
            borderWidth="2px"
            size="medium"
            textColorHover="white"
            backgroundColorHover="#0d8bc2"
            onClick={toggleFollow}
          >
            Seguir
          </MyButton>

        }
      </CardActions>
    </Card>
  );
}

