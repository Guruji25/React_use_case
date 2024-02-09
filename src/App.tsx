import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/ HomeScreen';
import DetailPage from './components/DetailScreen';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { addCarBrands } from './redux/actions/carActions';


const App: React.FC = () => {
  const carBrandsData = [
   
    {
        "name": "Maruthi Suzuki",
        "image": "",
        "id": "001"
    },
    {
        "name": "Hyundai",
        "image": "",
        "id": "002"
    },
    {
        "name": "Renault",
        "image": "",
        "id": "003"
    },
    {
        "name": "Honda",
        "image": "",
        "id": "004"
    },
    {
        "name": "Tata",
        "image": "",
        "id": "005"
    },
    {
        "name": "Ford",
        "image": "",
        "id": "006"
    },
    {
        "name": "Volkswagen",
        "image": "",
        "id": "007"
    },
    {
        "name": "Mahindra",
        "image": "",
        "id": "008"
    },
    {
        "name": "BMW",
        "image": "",
        "id": "009"
    },
    {
        "name": "Mercedes-Benz",
        "image": "",
        "id": "010"
    }
  ]
      store.dispatch(addCarBrands(carBrandsData));

  return (
        <Provider store={store}>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;

