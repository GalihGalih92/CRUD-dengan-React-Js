import React from "react";
import { Row, Form, Button, Col } from "react-bootstrap";

const form_add = ({
    full_name,
    phone_number,
    email,
    handleSubmit,
    handleChange,
    id
}) => {
    return (
    <div className="mt-4">
      <Row>
        <Col>
          <h3>{id?"Edit Data" : "Tambah Data"}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                name="full_name"
                value={full_name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Phone Number"
                name="phone_number"
                value={phone_number}
                onChange={(event) => handleChange(event)}
              />
              <Form.Text className="text-muted">
                We'll never share your phone number with anyone else.
              </Form.Text>
            </Form.Group>
                    
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default form_add;
