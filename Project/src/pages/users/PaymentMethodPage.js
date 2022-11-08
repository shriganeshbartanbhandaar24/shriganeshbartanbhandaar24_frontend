import React, { useState } from 'react'
import { Button, Col, Form, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { savePaymentMethod } from '../../action/CartAction'
import FormContainer from '../../components/shared/FormContainer'
import CheckoutSteps from './CheckoutSteps'

const PaymentMethodPage = () => {
  const { shippingAddress } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  if (!shippingAddress) {
    history.push('/shipping')
  }
  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeOrder')
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Form.Check
                  type='radio'
                  label='PayPal or Credit Card'
                  id='PayPal'
                  name='paymentMethod'
                  value='PayPal'
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Check
                  type='radio'
                  label='Stripe'
                  id='Stipe'
                  name='paymentMethod'
                  value='Stipe'
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type='submit' variant='dark' className='w-100'>
                  Continue
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Form.Group>
      </Form>
    </FormContainer>
  )
}

export default PaymentMethodPage
