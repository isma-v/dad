import React from "react";
import { useState } from "react";

import { Avatar } from "@mui/material";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Stack} from "@mui/material";

function Ficha() {

    const [count, setCount] = useState(0)

    const handleClick = () => {
      setCount(count+1);
    }
  
    const datos = {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
      imageSize: 200,
      animal: "Koala"
    }


    return ( 
        
        <Stack
            direction={{ xs: 'column', sm: 'column' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{
            marginTop: -13,
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: '100vh'  // Esto asegura que ocupe toda la pantalla
        }}
        >
        <Avatar src={datos.imageUrl} sx={{ width: datos.imageSize, height: datos.imageSize }} />
        <Typography variant="h4" component="h2">Soy un {datos.animal}. Haz click en el botón para incrementar:</Typography>
        <Button sx={{marginTop: 5}} variant='contained' onClick={() => setCount(count + 1)} size="large" color="success">Incremento: {count}</Button>
        
        </Stack>
       
       
     );
}


export default Ficha;