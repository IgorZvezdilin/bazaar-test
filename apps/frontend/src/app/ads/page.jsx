'use client';

import axios from 'axios';
import React, { useCallback, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Button, Box, Stack, SwipeableDrawer, Typography } from '@mui/material';
import styles from '../index.module.scss';
import AdsList from '../../components/AdsList';
import DrawerBody from '../../components/DrowerBody';

export default function Index() {
  const [ads, setAds] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fetchAds = useCallback((queryparams = '') => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/api/ads${queryparams}`);
        setAds(data.results);
        setIsLoading(false);
      } catch (err) {
        if (queryparams) {
          toast.error(`Something went wrong...`, {
            position: 'top-center',
            html: true,
          });
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    fetchAds();
  }, [fetchAds]);

  return (
    <main className={styles.container}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap="20px"
        minWidth="100%"
      >
        <Typography variant="h3" component="div">
          List of Ads
        </Typography>
        <Box>
          <Button onClick={() => setIsOpen(true)}>Filters</Button>
          <SwipeableDrawer
            anchor="right"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onOpen={() => {}}
          >
            <DrawerBody fetchAds={fetchAds} isLoading={isLoading} />
          </SwipeableDrawer>
        </Box>
      </Stack>
      <AdsList results={ads} />
    </main>
  );
}
