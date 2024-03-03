'use client';

import { Skeleton, Grid, Box } from '@mui/material';
import React from 'react';
import AdsListElement from './AdsListElem';

function AdsList({ results }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Grid
        container
        gap="20px"
        item
        xs={12}
        sm={12}
        md={12}
        lg={10}
        xl={7}
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        {results ? (
          results.map((item) => <AdsListElement key={item.id} item={item} />)
        ) : (
          <>
            <Skeleton variant="outline" width={250} height={300} />
            <Skeleton variant="outline" width={250} height={300} />
            <Skeleton variant="outline" width={250} height={300} />
            <Skeleton variant="outline" width={250} height={300} />
          </>
        )}
      </Grid>
    </Box>
  );
}

export default React.memo(AdsList);
