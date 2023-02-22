// import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';

const About = () => {
  return (
    <Container fluid className="page-container">
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <h1>About Me!</h1>
        </Col>
      </Row>

      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <p>Hokey religions and ancient weapons are no match for a good blaster at your side, kid.</p>

          <p>I'm trying not to, kid. Ye-ha! A tremor in the Force. The last time I felt it was in the presence of my old master. I suggest you try it again, Luke. This time, let go your conscious self and act on instinct.</p>

          <p>I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. In my experience, there is no such thing as luck. Don't underestimate the Force. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;