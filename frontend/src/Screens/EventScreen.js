import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import axios from "axios"


const EventScreen = () => {

    const params = useParams();

    const [event, setEvent] = useState({})

    useEffect(() =>{
        const fetchEvent = async () => {
            const {data} = await axios.get(`/api/events/${params.id}`)
            setEvent(data)
        }
        fetchEvent()

    },[params.id])

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={event.image} alt={event.name} fluid/>
                    <ListGroup.Item>Description: {event.description}</ListGroup.Item>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{event.name}</h3>

                        </ListGroup.Item>
                        {/*<ListGroup.Item>*/}
                        {/*    <Rating*/}
                        {/*        value={event.rating}*/}
                        {/*        text={`${event.numReviews} reviews`}*/}
                        {/*    />*/}
                        {/*</ListGroup.Item>*/}
                        <ListGroup.Item>Category: {event.category}</ListGroup.Item>
                        <ListGroup.Item>Ticket Price: ${event.ticketprice}</ListGroup.Item>
                        <ListGroup.Item>Available Tickets: {event.ticketsavail}</ListGroup.Item>
                        <ListGroup.Item>Date: {event.date}</ListGroup.Item>
                        <ListGroup.Item>Location: {event.location}</ListGroup.Item>
                        <ListGroup.Item>City: {event.city}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Category:</Col>
                                    <Col>
                                        <strong>{event.category}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tickets Available:</Col>
                                    <Col>
                                        {event.ticketsavail > 0 ? 'In Stock' : 'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    className='btn-block'
                                    type='button'
                                    disabled={event.ticketsavail === 0}
                                >
                                    Buy Ticket
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EventScreen;