import React from 'react'
import {Card} from 'react-bootstrap'
const Event = ({event}) => {
  return (
    
    <Card className='my-3 p-3 rounded'>
      
        <Card.Img src={event.image} variant ='top'/>
        
        
        
           <Card.Title as='div'>
            <strong>{event.name}</strong>
            </Card.Title > 
    </Card>
       
  )
}

export default Event