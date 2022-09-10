import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from "./components/Footer";
import React from 'react'
import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import EventScreen from './Screens/EventScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ShippingScreen from './Screens/shippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
const App = () =>  {
  return (
    < >
    <Router>
    < Header />
      <main>
        <Container >
          <Routes>
            <Route path= "/" exact element = {<HomeScreen />} />
            <Route path= "/event/:id" element = {<EventScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/cart' element={<CartScreen />}/>
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/profile' element={<ProfileScreen />}/>
            <Route path='/shipping' element={<ShippingScreen />}/>
            <Route path='/payment' element={<PaymentScreen />}/>
            <Route path='/placeorder' element={<PlaceOrderScreen />}/>
            
            <Route path='/order/:id' element={<OrderScreen />} />
           </Routes> 
        </Container>
      </main>
    <Footer />
    </Router>
    </>
   
  );
 }

export default App;