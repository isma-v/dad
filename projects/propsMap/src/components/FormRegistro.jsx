import React from "react";
import { useState } from "react";

import { Grid2 } from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
function FormRegistro() {

    const animales = [];

    const [count, setCount] = useState(0)

    const [data, setData] = useState({name:'', breed:''})
    const handleChange = (event) => {
    setData({...data, [event.target.id]: event.target.value  });
    console.log(data);
    
    }

    const handleClick = () => {
      animales.push(data);
      setData({name:'', breed:''});
      console.log(animales);

    }

    let num = 13;
    const size = {num};
    
    return ( 


      <Grid2 spacing={0} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={12} spacing={0}>
          <div
            style={{ color: "orange", fontWeight: "bold", fontSize: "20px", textAlign: "center", width: "100%" }}
          >Registra tu mascota</div>
        </Grid2>
        <Grid2 size={6} spacing={0}>
          <TextField
            
            id="name"
            onChange={handleChange}
            fullWidth label="Name" variant="outlined" />
        </Grid2>
        <Grid2>

          <TextField
            id="breed"
             spacing={0}
            onChange={handleChange}

            fullWidth label="Breed" variant="outlined" />
        </Grid2>
        <Grid2 size={12} spacing={0}>
          <Button fullWidth sx={{ marginTop: 5 }} variant='contained' onClick={handleClick} size="large" color="secondary">Registro </Button>
        </Grid2>
      </Grid2>
     );


}

export default FormRegistro;
