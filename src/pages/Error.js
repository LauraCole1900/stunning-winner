import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './style.css';

const Error = () => {
  return (
    <Container fluid className="page-container">
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <h1>Your princess is in another castle! 404 Not Found</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <Link to="/"><Button>ET Go Home</Button></Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Error;