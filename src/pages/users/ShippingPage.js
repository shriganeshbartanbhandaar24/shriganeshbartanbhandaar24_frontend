import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveShippingAddress } from '../../action/CartAction'
import FormContainer from '../../components/shared/FormContainer'
import CheckoutSteps from './CheckoutSteps'

const ShippingPage = () => {
  const { shippingAddress } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  const [address, setAddress] = useState(
    shippingAddress.address ? shippingAddress.address : ''
  )
  const [city, setCity] = useState(
    shippingAddress.city ? shippingAddress.city : ''
  )
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode ? shippingAddress : ''
  )
  const [country, setCountry] = useState(
    shippingAddress.country ? shippingAddress.country : ''
  )

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(saveShippingAddress({ address, city, postalCode, country }))

    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='Address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter the Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId='City'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter the City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId='Postal Code'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter the Postal Code'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId='Country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter the Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>

        <Button type='submit' variant='dark'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingPage
