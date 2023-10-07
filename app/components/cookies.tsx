import React from 'react';
import { Container, Navbar, Nav, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faCookieBite, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import styles from '../page.module.css'


function CookiesMessage() {

    const [visible, setVisible] = React.useState(true)

    function handleVisibility() {
        setVisible(!visible);
    }

    
  return (
  <Container>
    <Container className={visible === true ? styles.cookiesMessage : styles.cookiesMessageInvisible}>
      <Container className='d-flex align-items-center justify-content-center'>
        <div className='container'>
        <Container>
      <Row>
        <Col className="text-center">
          <FontAwesomeIcon icon={faCookieBite} size="2x" style={{marginBottom: '50px'}} />
          <p>
            We use cookies to improve your experience on our website. By using
            our website, you agree to our use of cookies.
            <a href="/cookie-policy">Learn more</a>
          </p>
          <Button variant="outline-dark" size="sm" className={styles.xbtn}>
            <FontAwesomeIcon icon={faXmark} onClick={handleVisibility} />
          </Button>
        </Col>
      </Row>
    </Container>
        </div>
      </Container>
    </Container>
  </Container>
  );
}

export default CookiesMessage;