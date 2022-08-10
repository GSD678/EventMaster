import React,{useState, useEffect} from 'react'
import { Row, Col} from 'react-bootstrap'
import Event from '../components/Event'
import axios from "axios";

const HomeScreen = () => {

  const [events, setEvents] = useState([])
  useEffect(() => {
    const fetchEvents = async () => {
      const {data} = await axios.get("/api/events")
      setEvents(data)
    }
    fetchEvents()
  })
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
