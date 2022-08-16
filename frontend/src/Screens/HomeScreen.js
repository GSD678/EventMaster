import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Row, Col} from 'react-bootstrap'
import Event from '../components/Event'
import {listEvents} from "../actions/eventAction.js"
import Loader from "../components/Loader";
import Message from '../components/Message'


const HomeScreen = () => {

  const dispatch= useDispatch()
  const eventList = useSelector((state) => state.eventList)
  const {loading, error, events} = eventList
  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch])

  return (
      <>
        <h1>Latest Events</h1>
        {loading ? (
            <Loader />
        ): error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
            <Row>
              {events.map((event) => (
                  <Col key={event.id} sm={12} mdf={6} lg={4} xl={3}>
                    <Event event={event} />
                  </Col>
              ))}
            </Row>
        )}

      </>
  )
  }

export default HomeScreen
