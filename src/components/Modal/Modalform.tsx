import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch } from "react-redux";
import { saveCarDetails } from "../../redux/actions/formAction";

interface ModalFormProps {
    show: boolean;
    onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ show, onClose }) => {
    
const [open, setOpen] = React.useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [error, setError] = useState(false);
const formData = new FormData();
const [carDetails, setCarDetails] = useState({ 
    modelName: '', location: '', color:'', yom: '', transmission: '', insDate:'', noOfOwner: 0, exFitments: '', kms: '',  
});
const dispatch = useDispatch();

const handleOpen = () => {
    setOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};

const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setCarDetails({
        ...carDetails,
        [fieldName]: value,
    });
};

const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
};

const handleSubmit = (e: React.FormEvent) => {
    console.log("saved 1")
    e.preventDefault();
    formData.append('modelName', carDetails.modelName);
    formData.append('location', carDetails.location);
    formData.append('color', carDetails.color);
    formData.append('yom', carDetails.yom);
    formData.append('transmission', carDetails.transmission);
    formData.append('insDate', carDetails.insDate);
    formData.append('noOfOwner', carDetails.noOfOwner.toString());
    formData.append('exFitments', carDetails.exFitments);
    formData.append('kms', carDetails.kms);
    dispatch(saveCarDetails(formData));
    setIsModalOpen(false);
};


return(
    <Modal
        open={show}
        onClose={closeModal}
        style={{
            position: "fixed",
            border: ".5px solid #000",
            backgroundColor: "white",
            boxShadow: "2px solid black",
            height: 600,
            width: 600,
            margin: "auto",
            padding: "2%",
            color: "black",
            // display: "block",
        }}
        >
        <Box component="form" sx={{
            '& .MuiTextField-root': { m: 3, width: '25ch' },
        }}>
            <Typography variant="h6" component="h2">
            Car Details
            </Typography>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Model Name"
                    defaultValue=""
                    value={carDetails.modelName}        
                    onChange={(e) => handleInputChange('modelName', e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Location"
                    defaultValue=""
                    value={carDetails.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                />
            </div>
            <div>
            <TextField
                    required
                    id="outlined-required"
                    label="Color"
                    defaultValue=""
                    value={carDetails.color}
                    onChange={(e) => handleInputChange('color', e.target.value)}
                />
                <TextField
                    id="outlined-required"
                    label="No of Owner"
                    defaultValue=""
                    value={carDetails.noOfOwner}
                    onChange={(e) => handleInputChange('noOfOwner', e.target.value)}
                />
            </div>
            <div>
                <TextField
                    id="outlined-required"
                    label="Year of Manufacture"
                    defaultValue=""
                    value={carDetails.yom}
                    onChange={(e) => handleInputChange('yom', e.target.value)}
                />
                <TextField
                    id="outlined-required"
                    label="Transmission"
                    defaultValue=""
                    value={carDetails.transmission}
                    onChange={(e) => handleInputChange('transmission', e.target.value)}
                />
            </div>
            <div>
                <TextField
                    id="outlined-required"
                    label="Insurance Valid date"
                    defaultValue=""
                    value={carDetails.insDate}
                    onChange={(e) => handleInputChange('insDate', e.target.value)}
                />
                <TextField
                    id="outlined-required"
                    label="Kilometers"
                    defaultValue=""
                    value={carDetails.kms}
                    onChange={(e) => handleInputChange('kms', e.target.value)}
                />
            </div>
            <div>
                <TextField
                        id="outlined-required"
                        label="External Fitments"
                        defaultValue=""
                        value={carDetails.exFitments}
                        onChange={(e) => handleInputChange('exFitments', e.target.value)}
                    />
              <Button style={{marginTop: 30, marginLeft: 25}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload Photo
                </Button>
            </div>
            <div style={{marginLeft: 490}}>
                <Button variant="contained" onClick={() => handleSubmit}>Submit</Button>
            </div>
        </Box>
    </Modal>
    )
}

export default ModalForm;