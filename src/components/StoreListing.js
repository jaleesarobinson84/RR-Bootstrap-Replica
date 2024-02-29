import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'; // Import necessary components from react-bootstrap

function StoreList() {
  return (
    <div className='List'>
      <h2>Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}> {/* Move style prop inside Container tag */}
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
          <Col xs={6}> {/* Change ".5" to "6" */}
            <Row>
              <Col xs={6} >
                <Image src="https://www.instacart.com/image-server/68x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
          <Col sm={1}></Col> {/* Use sm={1} instead of Col component with no children */}
          <Col xs={6}>
            <Row>
              <Col xs={6}>
                <Image src="https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
          <Col sm={1}></Col>
          <Col xs={6}>
            <Row>
              <Col xs={6}>
                <Image src="https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/231/30647104-9adb-4346-babc-3757295650b8.png" roundedCircle />
              </Col>
              <Col md={6}> {/* Change "Col" to "md={6}" */}
                <h5 style={{ fontWeight: "bold" }}>Wegmans</h5>
                <p>Delivery</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StoreList;
