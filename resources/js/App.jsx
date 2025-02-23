import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from '../image/logo.png'
import '../css/app.css'

const App = () =>{
    const navigate = useNavigate();
    return(
        <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="border rounded shadow-lg w-50 bg-light card-size d-flex justify-content-center">
          <Row className="d-flex align-items-center">
            <Col xs={4} className="text-center">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                
              />
            </Col>
            <Col xs={8} className="text-center bg-hospital">
              <h1>HOSPITAL UPDS</h1>
              <Button variant="dark" className="mt-5" onClick={() => navigate("/login")}>Iniciar Sesión</Button>
            </Col>
          </Row>
        </div>
      </Container>
    )
}
export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}
