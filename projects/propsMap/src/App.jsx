import { useState } from 'react'

import './App.css'
//import Button from './components/Button'
import Ficha from './components/Ficha'
import FormRegistro from './components/FormRegistro'
import { ListItem, List } from '@mui/material'

const animals = [{
  id: 0,
  animal: 'gato',
  atribute: 'feliz',
  imageUrl: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  imageSize: 150,
  description: 'Gato común',
  },
  { id: 1,
  animal: 'perro',
  atribute: 'bello',
  imageUrl: 'https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg',
  imageSize: 150,
  description: 'Perro callejero',
  },
  { id: 2,
  animal: 'loro',
  atribute: 'hablador',
  imageUrl: 'https://img.freepik.com/foto-gratis/loro-colorido-pluma-verde-roja-cabeza_1340-38606.jpg',
  imageSize: 150,
  description: 'Loro de la jungla',
  },
  { id: 3,
  animal: 'tortuga',
  atribute: 'perezosa',
  imageUrl: 'https://static3.depositphotos.com/1003671/179/i/450/depositphotos_1792145-stock-photo-mountain-tortoise.jpg',
  imageSize: 150,
  description: 'Tortuga',
  }]


function App() {
 

  
  return (
    
      <List> 
      
      {animals.map((animal) => (
        <ListItem
          sx={{ margin: '50px', backgroundColor: 'lightgray', borderRadius: '10px', padding: '20px' }}
          key={animal.id}
          
        >
        <Ficha
        key={animal.id}
        animal={animal.animal}
        atribute={animal.atribute}
        imageUrl={animal.imageUrl}
        imageSize={animal.imageSize}
        description={animal.description}
        />
        </ListItem>
      ))}


     
      {/*<FormRegistro/>*/}
      
      </List>

 
  
  )
}

export default App
