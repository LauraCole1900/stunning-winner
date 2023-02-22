import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';

const MyNav = () => {
  return (
    <Container fluid className="nav-container">
      <Row>
        <Col className="d-flex justify-content-around align-items-center">
          <Link to="/">My Site</Link>
          <ul className="navlist d-flex align-items-center">
            <li className="navlink"><Link to="/about">About</Link></li>
            <li className="navlink"><Link to="/portfolio">Portfolio</Link></li>
            <li className="navlink"><Link to="/contact">Contact</Link></li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
};

export default MyNav;