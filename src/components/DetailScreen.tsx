// HomeScreen.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/';

const DetailScreen = () => {
  const carBrands = useSelector((state: RootState) => state.carBrands);
  console.log(carBrands);

  return (
    <div>
      <h1>Car Brands</h1>
      <p>Data from Redux: {JSON.stringify(carBrands, (key, value) => {
  if (typeof value === 'function' || typeof value === 'symbol' || value === undefined) {
    return undefined; // Filter out non-serializable values
  }
  return value.name; // Return serializable values
})}</p>
      <ul>
        {carBrands.map(carBrand => (
          <li key={carBrand.id}>{carBrand.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailScreen;
