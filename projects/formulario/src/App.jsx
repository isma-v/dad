import { useState } from 'react'
import React from 'react'
import './App.css'


// MUI IMPORTS
import { Button, TextField, Typography, RadioGroup, Checkbox, Grid2, FormControl, FormControlLabel, Radio, Select, MenuItem, Rating, ButtonGroup, Box, InputLabel, FormLabel } from '@mui/material'

function App() {
  // Estado para almacenar los datos del formulario
  const [data, setData] = useState({
    nombre: '',
    apellidos: '',
    edad: '',
    genero: '',
    lenguaje: '',
    rating: 0,
    termsAccepted: false,
  });

  const genderData = {
    femenino: 'femenino',
    masculino: 'masculino',
    otro: 'otro',
  }

  const languageData = {
    c: 'C++',
    java: 'Java',
    php: 'PHP',
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data); // Mostrar los datos en la consola
  };

  const handleClear = () => {
    setData({
      nombre: '',
      apellidos: '',
      edad: '',
      genero: '',
      lenguaje: '',
      rating: 0,
      termsAccepted: false,
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              required
              value={data.nombre}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
            <TextField
              id="apellidos"
              name="apellidos"
              label="Apellidos"
              variant="outlined"
              fullWidth
              required
              value={data.apellidos}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
            <TextField
              id="edad"
              name="edad"
              label="Edad"
              variant="outlined"
              type="number"
              fullWidth
              required
              value={data.edad}
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
            <FormLabel component="legend">Género</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="genero"
              sx={{ display: 'flex', justifyContent: 'space-around', gap: 3 }}
              value={data.genero}
              onChange={handleChange}
              required
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
                  name="lenguaje"
                  value={data.lenguaje}
                  onChange={handleChange}
                  required
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
                  required
                  name="rating"
                  value={data.rating}
                  onChange={(event, newValue) => {
                    setData((prevData) => ({ ...prevData, rating: newValue }));
                  }}
                />
              }
              label="Puntúa esta encuesta"
              labelPlacement='start'
              sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
            <FormControlLabel
              required
              control={<Checkbox name="termsAccepted" checked={data.termsAccepted} onChange={handleChange} />}
              label="He leído los términos y condiciones"
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
            <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
              <Button variant='contained' type="submit">ENVIAR</Button>
              <Button variant='outlined' onClick={handleClear} color="primary">LIMPIAR</Button>
            </ButtonGroup>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  )
}

export default App;