import React from 'react';
import { Container, Navbar, Nav, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import styles from '../page.module.css'


function Header() {
  return (
    <div className={styles.heading}>
      <Container>
        <div className='nav-container'>
          <Navbar expand="md" variant="dark"  className={styles.navbar}>
            <Container fluid>
              <Navbar.Brand className={styles.logo} href="/">
              <Image
                  src="/MZA_Logo__No_Text_-removebg-preview.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="mx-auto mb-2 mb-lg-0">
                  <Nav.Item>
                    <Nav.Link href="/" active>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/services">Services</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav className={styles.icons}>
                  <Nav.Item>
                    <Nav.Link href="#" className={styles.navLink}><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" className={styles.navLink}><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" className={styles.navLink}><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" className={styles.navLink}><FontAwesomeIcon icon={faBehance} /></Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
              
            </Container>
          </Navbar>
        </div>
        <Row>
        <Col lg={5} className={styles.content}>
          <div className={styles.texts}>
            <h1 >
              We create masterpieces, Call us masters.
            </h1>
            <p>
              MZA Associates is a full-service digital agency that provides
              customized web design, development, and designs to meet your
              business needs. With a focus on quality, reliability, and
              affordability, MZA helps transform your ideas into results.
            </p>
            <Button href="/login" className={styles.button}>
              Get Started
            </Button>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Header;