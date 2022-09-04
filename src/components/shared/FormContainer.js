import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col className='mx-auto justify-content-md-center' md={6} xs={12}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
