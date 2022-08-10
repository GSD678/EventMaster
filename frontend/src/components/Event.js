import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Event = ({event}) => {
  return (
    
    <Card className='my-3 p-3 rounded'>
      <Link Link to ={`/event/${event._id}`}>
        <Card.Img src={event.image} variant ='top'/>
        </Link>
        <Card.Body>
        <Link Link to ={`/event/${event._id}`}>
          <Card.Title as='div'>
            <strong>{event.name}</strong>
            </Card.Title > 
            </Link>
            <Card.Text as='h6'>{event.city}</Card.Text>
            <small>{event.date}</small>
          
          <Card.Text >Tickets ${event.ticketprice} and up</Card.Text>
          <Card.Text>
           <i class="fa fa-users" aria-hidden="true"></i> {event.followers} Followers  
           </Card.Text>  
        </Card.Body>
           
    </Card>
       
  )
}

export default Event