import React from 'react'
import {Card} from 'react-bootstrap'
const Event = ({event}) => {
  return (
    
    <Card className='my-3 p-3 rounded'>
      
        <Card.Img src={event.image} variant ='top'/>
        <Card.Body>
          <Card.Title as='div'>
            <strong>{event.name}</strong>
            <Card.Text as='h6'>{event.city}</Card.Text>
            <small>{event.date}</small>
          </Card.Title > 
          
          <Card.Text >Tickets ${event.ticketprice} and up</Card.Text>
          
        
           <Card.Text>
           <i class="fa fa-users" aria-hidden="true"></i> {event.followers} Followers  
           </Card.Text>  
        </Card.Body>
           
    </Card>
       
  )
}

export default Event