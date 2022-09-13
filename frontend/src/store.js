import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer} from './reducers/eventReducer'
import { cartReducer } from './reducers/cartReducers'
import { userDetailsReducer, userLoginReducer, userUpdateProfileReducer,userRegisterReducer } from './reducers/userReducers'
import { orderCreateReducer,
  orderDetailsReducer, orderPayReducer, } from './reducers/orderReducer'
const rootReducer = combineReducers({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer, 
  orderDetails: orderDetailsReducer,  
  orderPay: orderPayReducer, 

})
const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  const initialState = {
    cart: {
      cartItems:  cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
      paymentMethod: paymentMethodFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage },
  }

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
})
})
export default store

