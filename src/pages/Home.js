// import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';

const Home = () => {
  return (
    <Container fluid className="page-container d-flex align-items-center">
      <Row>
        <Col sm={{ span: 8, offset: 2}}>
          <h1>Welcome To My Website!</h1>
        </Col>
      </Row>
    </Container>
  )
};

export default Home;