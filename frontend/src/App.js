import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Header/>
    <main>
      <Container>
          <h1>Welcome to EventMaster!</h1>
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
