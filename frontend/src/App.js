import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from "./components/Footer";
import React from 'react'
import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import EventScreen from './Screens/EventScreen';
const App = () =>  {
  return (
    < >
    <Router>
    < Header />
      <main>
        <Container >
          <Routes>
            <Route path= "/" exact element = {<HomeScreen/>}/>
            <Route path= "/event/:id" element = {<EventScreen/>}/>
           </Routes> 
        </Container>
      </main>
    <Footer />
    </Router>
    </>
   
  );
 }

export default App;