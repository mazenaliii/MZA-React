import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faPaintBrush, faCode, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import styles from '../page.module.css';

// Define a service component with type annotations.
interface ServiceProps {
  icon: any; // Using 'any' so it doesn't crash if the icon type is incorrect.
  title: string;
  description: string;
}


// Props for unavailable services component.
interface UnavaialableServicesProps {
  icon: any; 
  title: string;
  description: string;
}

function Service({ icon, title, description }: ServiceProps) {
  return (
    <div className={styles.services}>
      <Card style={{ maxWidth: '540px' }}>
        <Row noGutters>
          <Col md={8}>
            <Card.Body>
              <FontAwesomeIcon
                icon={icon}
                className="fs-1 mb-4"
                style={{ color: '#6045C9' }}
              />
              <h5 className="card-title" style={{ color: '#6045C9', }}>
                {title}
              </h5>
              <p className="card-text mt-4 mb-4" style={{ color: '#6045C9' }}>
                {description}
              </p>
              <Button
                href="#"
                style={{
                  textDecoration: 'none',
                  padding: '5px 10px',
                  backgroundColor: '#6045C9',
                  color: '#fff',
                  borderRadius: '5px',
                }}
                className={styles.servBtn}
              >
                Order
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
    
  );
}

function UnavaialableService({ title, icon, description }: UnavaialableServicesProps) {
  return(
    <div className={styles.unavailableService} style={{margin: '50px'}}>
    <Card style={{ maxWidth: '540px' }}>
      <Row noGutters>
        <Col md={8}>
          <Card.Body>
            <FontAwesomeIcon
              icon={icon}
              className="fs-1 mb-4"
              style={{ color: '#333' }}
            />
            <h5 className="card-title text dark" style={{ color: '#333', }}>
              {title}
            </h5>
            <p className="card-text mt-4 mb-4 text-dark" style={{ color: '#333' }}>
              {description}
            </p>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  </div>
  );
}


function ServicesPage() {
  return (
    <div className="services container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="title mb-4">
        <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>
          Our <span style={{ color: '#6045C9' }}>Services</span>
        </p>
      </div>

      <div className="all d-flex flex-wrap justify-content-center">
        {/* Use the Service component for each service */}
        <Service
          icon={faPalette}
          title="UI/UX"
          description="We design UI/UX Web pages, Application landing pages, Desktop application full page designs and more."
        />
        <Service
          icon={faCode}
          title="Websites"
          description="MZA Team is full of highly rated programmers that can build and develop a full website in any category."
        />
        <Service
          icon={faDiscord}
          title="Discord bots"
          description="MZA Helps discord servers owners by creating a custom discord bot in any category."
        />
        <UnavaialableService
          icon={faMobile}
          title="Mobile applications"
          description="Service is not available at this moment."
        />
         
        
        <UnavaialableService
          icon={faPalette}
          title="Designs"
          description="Service is not available at this moment."
        />
      </div>
    </div>
  );
}

export default ServicesPage;
