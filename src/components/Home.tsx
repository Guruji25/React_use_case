import { Box, Card, CardContent, Grid, Modal, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Headerbar from "./appbar/Appbar";
import Cards from "./cards/cards";
import ModalForm from "./Modal/Modalform";
import { useSelector, useDispatch } from 'react-redux'
// import ExampleComponent from "../redux/ExampleComponent";

const HomePage = () => {

    useEffect(() => {
        console.log("Test")
    }, [])

    return(
        <div>
            <div>
                <Headerbar />
            </div>
            <div>
                <Cards />
            </div>
            {/* <div>
                <ModalForm />
            </div> */}
        </div>
    )
}

export default HomePage;