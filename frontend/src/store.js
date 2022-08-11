import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer} from './reducers/eventReducer'

const rootReducer = combineReducers({
  eventList: eventListReducer
})
const store = configureStore({
  reducer: rootReducer
})

export default store

