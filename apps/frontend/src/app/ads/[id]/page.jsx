'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdDetails from '../../../components/AdDetails';

function SingleAds({ params: { id } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/ads/${id}`);
        setIsLoading(false);
        setItem(data);
      } catch (err) {
        toast.error(`Something went wrong...`, {
          position: 'top-center',
          html: true,
        });
        toast.info(`Try again...`, {
          position: 'top-center',
          html: true,
        });
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return <AdDetails item={item} isLoading={isLoading} />;
}

export default React.memo(SingleAds);
