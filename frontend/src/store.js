import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'

const rootReducer = combineReducers({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer
})
const store = configureStore({
  reducer: rootReducer
})

export default store

