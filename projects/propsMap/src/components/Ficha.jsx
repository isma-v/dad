import React from "react";
import { useState } from "react";

import { Avatar } from "@mui/material";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Stack, Grid2} from "@mui/material";

function Ficha({animal, atribute, imageUrl, imageSize, description  }) {

    const [count, setCount] = useState(0)

    const handleClick = () => {
      setCount(count+1);
    }
  
    const datos = {
      imageUrl: imageUrl,
      imageSize: imageSize,
      animal: animal,
      description: description,
      atribute: atribute
    }


    return ( 
        
        <Grid2
        container spacing={3}
        >
          <Grid2 size={{ xs: 6, md: 8 }}>
          <Avatar src={datos.imageUrl} sx={{ width: datos.imageSize, height: datos.imageSize }} />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 8 }}>
          <Typography variant="h4" component="h2">Descripción: {datos.description}</Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 8 }}>
          <Typography variant="h4" component="h2">Soy un {datos.animal} {datos.atribute}. Haz click en el botón para incrementar:</Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 8 }}>
          <Button sx={{marginTop: 5}} variant='contained' onClick={() => setCount(count + 1)} size="large" color="success">Incremento: {count}</Button>
          </Grid2>
        
        
        </Grid2>
       
       
     );
}


export default Ficha;