import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';
import ModalDialog from './ModalDialog';

const IsmaelVH = ({ onCommentSubmit, onClick, disabled, handleClickOpen }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  

 

  return (
    <IconButton onClick={onClick} disabled={disabled} aria-label="add to favorites">
      <ChatBubbleOutlineIcon />
    </IconButton>
  );
};

export default IsmaelVH;