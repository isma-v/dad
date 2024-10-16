import { useState } from 'react'

import './App.css'
import { List, ListItem } from '@mui/material'

import Testimonio from './components/Testimonio'


function App() {

  const people = [
    {
      id: 0,
      imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      userName: 'Juan Pérez',
      userLocation: 'Madrid, España',
      description: 'Cliente Satisfecho',
      content: 'El servicio fue excelente y el producto superó mis expectativas.',
      alt: 'Foto de Juan Pérez'
    },
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      userName: 'María García',
      userLocation: 'Barcelona, España',
      description: 'Gran Experiencia',
      content: 'Estoy muy feliz con mi compra. Definitivamente volveré a comprar.',
      alt: 'Foto de María García'
    },
    {
      id: 2,
      imageUrl: ' https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=400',
      userName: 'Carlos Fernández',
      userLocation: 'Valencia, España',
      description: 'Producto de Calidad',
      content: 'La calidad del producto es impresionante. Lo recomendaré a mis amigos.',
      alt: 'Foto de Carlos Fernández'
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=',
      userName: 'Ana López',
      userLocation: 'Sevilla, España',
      description: 'Recomendado',
      content: 'Un servicio excepcional y un producto maravilloso. ¡Gracias!',
      alt: 'Foto de Ana López'
    }
  ];



  return (
    <List>

      {people.map((person, index) => (
        <ListItem
          sx={{ margin: '50px', backgroundColor: 'lightgray', borderRadius: '10px', padding: '20px' }}
          key={person.id}

        >
          <Testimonio
            key={person.id}
            userName={person.userName}
            userLocation={person.userLocation}
            description={person.description}
            content={person.content}
            imageUrl={person.imageUrl}
            alt={person.alt}



          />
        </ListItem>
      ))}




    </List>


  );
}

export default App
