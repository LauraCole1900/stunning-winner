import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import doctors from '../stuff.json';
import './style.css';

const Portfolio = () => {
  const [docData, setDocData] = useState(doctors);
  const [newDoc, setNewDoc] = useState({
    actorName: '',
    role: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoc({ ...newDoc, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(newDoc);

    setDocData([...docData, newDoc]);
    setNewDoc({
      actorName: '',
      role: ''
    })
  };

  useEffect(() => {
    document.title = newDoc.actorName;
  }, [newDoc])

  if (!docData) {
    return <h1>No data found!</h1>
  }

  return (
    <Container fluid className="page-container">
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <ul>
            {docData.map((doctor, i) => (
              <li key={i}>{doctor.actorName}, {doctor.role}</li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <Form>
            <Form.Group controlId="newDoctorName">
              <Form.Label>Actor's name:</Form.Label>
              <Form.Control type="input" name="actorName" value={newDoc.actorName} placeholder="Actor's name" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="newDoctorRole">
              <Form.Label>Role:</Form.Label>
              <Form.Control type="input" name="role" value={newDoc.role} placeholder="Doctor who?" onChange={handleInputChange} />
            </Form.Group>
            <Button type="submit" onClick={handleFormSubmit}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio;
