import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MyFavouriteBorder({ iconColor = 'default', disabled = false, onClick }) {
  return (
    <IconButton onClick={onClick} disabled={disabled} aria-label="add to favorites">
      <FavoriteBorderIcon style={{ color: iconColor }} />
    </IconButton>
  );
}

export default MyFavouriteBorder;