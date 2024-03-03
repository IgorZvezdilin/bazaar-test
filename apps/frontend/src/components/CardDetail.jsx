'use client';

import { Typography, Button, Stack } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState, useEffect, useCallback } from 'react';

export default function CardDetail({ item, isFull }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = useCallback(
    (event) => {
      const likedItemms = JSON.parse(localStorage.getItem('likedItems')) || [];
      let filteredItems = [];
      likedItemms.push(item.id);
      setIsLiked((prev) => {
        if (!prev) {
          filteredItems = [...likedItemms, item.id];
          return true;
        }
        filteredItems = likedItemms.filter((id) => id !== item.id);
        return false;
      });

      localStorage.setItem('likedItems', JSON.stringify(filteredItems));
      event.stopPropagation();
    },
    [item.id]
  );

  useEffect(() => {
    if (item && item.id) {
      const likedItemms = JSON.parse(localStorage.getItem('likedItems'));
      if (likedItemms && likedItemms.some((likedItem) => likedItem === item.id))
        setIsLiked(true);
    }
  }, [item]);

  return (
    <>
      <Stack
        marginTop={`${!isFull ? '40px' : ''}`}
        direction="row"
        alignItems="center"
        height="40px"
        width={`${!isFull ? '250px' : '100%'}`}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography
            className={`${!isFull ? 'typography-clamp' : ''}`}
            variant="body1"
            component="div"
          >
            {item.title}
          </Typography>
          <Button onClick={handleLikeClick} value={item.id}>
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        marginTop="20px"
        width="100%"
        justifyContent="space-between"
      >
        <Typography
          className="typography-clamp"
          variant="body1"
          component="div"
        >
          {item.city_name}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          xs={{
            minWidth: 20,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {item.price}
        </Typography>
      </Stack>
    </>
  );
}
