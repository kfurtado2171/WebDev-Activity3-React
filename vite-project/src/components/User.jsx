import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function User({ image, firstName, age, address, email }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ width: '160px' }} />
      <Card.Body>
        <Card.Title>{firstName}</Card.Title>
        <Card.Text style={{ alignItems: 'center' }}>
          {firstName} is {age} years old and lives in {address.address}, {address.city}, {address.state}. His email is {email}.
        </Card.Text>
        <Button variant="primary" id="Message">Message</Button>
      </Card.Body>
    </Card>
  );
}

export default User;
