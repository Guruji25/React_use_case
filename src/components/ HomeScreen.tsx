// HomeScreen.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import Headerbar from './appbar/Appbar';
import ModalForm from './Modal/Modalform';

const HomeScreen = () => {
  const carBrands = useSelector((state: RootState) => state.carBrands);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(carBrands);

function handleClick(id: string) {
    console.log("Card id:", id);
    setIsModalOpen(true);
}
const handleCloseModal = () => {
  setIsModalOpen(false);
};

  return (
    <div>
      <div>
          <Headerbar />
      </div>
      <h1>Car Brands</h1>
      <p>{JSON.stringify(carBrands, (key, value) => {
  if (typeof value === 'function' || typeof value === 'symbol' || value === undefined) {
    return undefined; // Filter out non-serializable values
  }
  return value.name; // Return serializable values
})}</p>
      <Grid container spacing={3}>
        {carBrands.map(carBrand => (
          // <li key={carBrand.id}>{carBrand.name}</li>
          <Grid item md={4} key={carBrand.name}>
          <Card>
              <CardActionArea onClick={() => handleClick(carBrand.id)}>
            <CardContent>
              <Typography variant="h5" component="h2">
                IMG
              </Typography>
              <Typography variant="subtitle1" component="p">
                {carBrand.name}
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        ))}
      </Grid>
      <div>
          <ModalForm show={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default HomeScreen;
