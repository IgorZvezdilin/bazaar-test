import {
  Box,
  Button,
  Input,
  Typography,
  CircularProgress,
} from '@mui/material';
import React, { useState } from 'react';

export default function DrawerBody({ fetchAds, isLoading }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 0,
    search: '',
    city: '',
    district: '',
  });

  const handleChange = (event) => {
    setFilters((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSearch = () => {
    const queryParams = Object.keys(filters)
      .filter((key) => filters[key] > 0 || filters[key].length > 0)
      .map((key, index) => `${index === 0 ? '?' : '&'}${key}=${filters[key]}`)
      .join('');
    fetchAds(queryParams);
  };

  return (
    <Box
      flexDirection="column"
      minWidth="300px"
      maxWidth="300px"
      paddingX="10px"
      justifyContent="center"
      alignContent="center"
    >
      <Box minWidth="200px" maxWidth="200px">
        <Typography variant="body1" component="div">
          Fitlers
        </Typography>

        <Typography variant="body" component="div" marginTop="20px">
          Min price:
        </Typography>
        <Input
          value={filters.minPrice}
          onChange={handleChange}
          name="minPrice"
          placeholder="min price"
          type="number"
          label="min price"
        />
        <Typography variant="body" component="div" marginTop="20px">
          Max price:
        </Typography>
        <Input
          value={filters.maxPrice}
          onChange={handleChange}
          name="maxPrice"
          placeholder="Max price"
          type="number"
        />
        <Typography variant="body" component="div" marginTop="20px">
          City:
        </Typography>
        <Input
          value={filters.city}
          onChange={handleChange}
          name="city"
          placeholder="City"
          type="string"
        />
        <Typography variant="body" component="div" marginTop="20px">
          District:
        </Typography>
        <Input
          value={filters.district}
          onChange={handleChange}
          name="district"
          placeholder="District"
          type="string"
        />
        <Typography variant="body" component="div" marginTop="20px">
          Contains:
        </Typography>
        <Input
          value={filters.search}
          onChange={handleChange}
          name="search"
          placeholder="Contains"
          type="string"
        />
      </Box>
      <Button
        sx={{
          marginTop: '20px',
        }}
        onClick={handleSearch}
      >
        {!isLoading ? 'Search!' : <CircularProgress />}
      </Button>
    </Box>
  );
}
