'use client';

import { Card, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
import CardDetail from './CardDetail';

function AdsListElement({ item }) {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/ads/${item.id}`);
  };

  return (
    <Card
      sx={{ maxWidth: 250, width: 250, minWidth: 250, height: 300 }}
      onClick={handleRedirect}
    >
      <CardMedia
        component="img"
        image={item && item.images && item.images[0].thumbnail}
        height="140px"
        alt="alt bazaar"
      />
      <CardContent>
        <CardDetail item={item} />
      </CardContent>
    </Card>
  );
}

export default React.memo(AdsListElement);
