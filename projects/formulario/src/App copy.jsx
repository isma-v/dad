import { useState } from 'react'
import React from 'react'
import './App.css'

//MUI IMPORTS

import { Button, TextField, Typography, RadioGroup, Checkbox, Grid2, FormControl, FormControlLabel, Radio, Select, MenuItem, Rating, ButtonGroup, Box, InputLabel, FormLabel } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  const genderData = {
    femenino: 0,
    masculino: 1,
    otro: 2,
  }
  const languageData = {
    c: 0,
    java: 1,
    php: 2,
  }

  const [language, setLanguage] = React.useState('');


  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const [value, setValue] = React.useState(2);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  //functions

  const handleChange = (event) => {

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        
        <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
          <TextField
            id="nombre"
            label="Nombre *"
            variant="outlined"
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
          <TextField
            id="apellidos"
            label="Apellidos *"
            variant="outlined"
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
          <TextField
            id="edad"
            label="Edad *"
            variant="outlined"
            fullWidth
          />
        </Grid2>

       
        <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
        <FormLabel component="legend">Género</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            label="radioGenero"
            sx={{ display: 'flex', justifyContent: 'space-around', gap: 3 }}

          >
            <FormControlLabel value={genderData.femenino} control={<Radio />} label="Femenino" />
            <FormControlLabel value={genderData.masculino} control={<Radio />} label="Masculino" />
            <FormControlLabel value={genderData.otro} control={<Radio />} label="Otro" />
          </RadioGroup>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 7 }}>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Lenguaje de programación favorito</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                
                onChange={handleChangeLanguage}
              >
                <MenuItem value={languageData.c}>C++</MenuItem>
                <MenuItem value={languageData.java}>Java</MenuItem>
                <MenuItem value={languageData.php}>PHP</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        

          <FormControlLabel
            control={
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            }
            label="Puntúa esta encuesta"
            labelPlacement='start'
            sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}
          />

        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="He leído los términos y condiciones" sx={{ display: 'flex', justifyContent: 'flex-start' }}/>
        </Grid2>

        

        
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
            <Button variant='contained'>ENVIAR</Button>
            <Button variant='outlined'>LIMPIAR</Button>
          </ButtonGroup>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default App
