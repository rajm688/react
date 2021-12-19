import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div className='counter'>
         <IconButton  onClick={() => {
        setlike(like + 1)}} aria-label="delete">
        <Badge badgeContent={like} color="primary"> <ThumbUpIcon /></Badge>
</IconButton>

<IconButton  onClick={() => {
        setdislike(dislike + 1);
      }} aria-label="delete">
        <Badge badgeContent={dislike} color="primary"> <ThumbDownIcon /></Badge>
</IconButton>
  </div>
  );
}

