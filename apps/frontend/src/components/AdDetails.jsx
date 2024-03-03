'use client';

import React, { useState } from 'react';
import { Button, Box, Stack, Typography, Skeleton } from '@mui/material';
import Image from 'next/image';
import CardDetail from './CardDetail';

function AdDetails({ isLoading, item }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="40px"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      {!isLoading && item ? (
        <Box
          display="flex"
          height="100%"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <Stack flexDirection="column">
            <Image
              src={item.images[activeIndex].image}
              alt={`Slide ${activeIndex + 1}`}
              width={Math.round(window.innerWidth / 3)}
              height={Math.round(window.innerHeight / 3)}
            />
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
              marginTop="10px"
            >
              <Button onClick={handlePrev} variant="contained">
                Prev
              </Button>
              <Button onClick={handleNext} variant="contained">
                Next
              </Button>
            </Stack>
          </Stack>
          <Stack width="100%">
            <CardDetail isFull item={item} />
            <Typography marginTop="40px">{item.description}</Typography>
          </Stack>
        </Box>
      ) : (
        <Skeleton
          variant="outline"
          width={Math.round(window.innerWidth / 2)}
          height={Math.round(window.innerHeight / 2)}
        />
      )}
    </Box>
  );
}

export default React.memo(AdDetails);
