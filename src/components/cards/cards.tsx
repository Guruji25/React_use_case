import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ModalForm from "../Modal/Modalform";
// import { setCarBrands } from "../../redux/actions/carBrandsAction";
// import carbrands from "../data/carbrands.json"
// import { useDispatch, useSelector } from "react-redux";
// import { CarBrand } from "../../redux/store/carBrandsReducers";

const Cards = () => {

    // const dispatch = useDispatch();
    // const brandss = useSelector((state: CarBrand) => state); 

    // useEffect(() => {
    //     dispatch(setCarBrands(carbrands));
    // })

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const brands = [
        {
            name: "Maruthi Suzuki",
            image: "",
            id: "001"
        },
        {
            name: "Hyundai",
            image: "",
            id: "002"
        },
        {
            name: "Renault",
            image: "",
            id: "003"
        },
        {
            name: "Honda",
            image: "",
            id: "004"
        },
        {
            name: "Tata",
            image: "",
            id: "005"
        },
        {
            name: "Ford",
            image: "",
            id: "006"
        },
        {
            name: "Volkswagen",
            image: "",
            id: "007"
        },
        {
            name: "Mahindra",
            image: "",
            id: "008"
        },
        {
            name: "BMW",
            image: "",
            id: "009"
        },
        {
            name: "Mercedes-Benz",
            image: "",
            id: "010"
        },
      ];

    function handleClick(id: string) {
        console.log("Card id:", id);
        setIsModalOpen(true);
    }


    return(

    <Grid container spacing={3}>
        {brands.map((brand) => (
          <Grid item md={4} key={brand.name}>
            <Card>
                <CardActionArea onClick={() => handleClick(brand.id)}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  IMG
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {brand.name}
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {/* <div>
            <ModalForm />
        </div> */}
      </Grid>
    )
}

export default Cards;