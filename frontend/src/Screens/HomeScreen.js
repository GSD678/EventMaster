import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Event from '../components/Event'
import events from '../events'
const HomeScreen = () => {
  return (
    <>
    <h1>Latest Events</h1>

    <Row>
        {events.map((event)=>(
            <Col key ={event._id} sm={12} md={6} lg={4} xl={3}>
               <Event event={event}/>
            </Col> 
        ))}
    </Row>
    </>
  )
  }
  

export default HomeScreen
