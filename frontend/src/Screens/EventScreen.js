import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Event from '../components/Event'
import {listEventDetails} from "../actions/eventAction.js"
import Loader from "../components/Loader";
import { Form } from 'react-bootstrap/lib/Navbar'


const EventScreen = () => {
   const[qty,setQty] = useState(0);
   const params = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const eventDetails = useSelector((state) => state.eventDetails)
    const {loading, error, event} = eventDetails
   useEffect(() => {
       dispatch(listEventDetails(params.id))
   }, [dispatch,params.id])

const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty={qty}`)
}

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
                            {product.countInStock > 0 && (
                             <ListGroup.Item>
                              <Row>
                                <col>Qty</col>
                                <col>
                                 <Form.Control
                                  as='select'
                                  value={qty}
                                  onChange={(e) => setQty(e.target.value)} 
                                  >
                                   {[...Array(product.countInStock).keys()].map((x) => (
                                       <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                     </option>
                                   ))}

                                  </Form.Control>
                                 </col>
                                </Row>
                               </ListGroup.Item>
                            )}




                            <ListGroup.Item>
                                <Button
                                    className='btn-block'
                                    type='button'
                                    disabled={event.ticketsavail === 0}
                                    onClick={addToCartHandler}
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
