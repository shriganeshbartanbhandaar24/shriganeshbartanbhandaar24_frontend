import React, { useState } from "react"
import { Button, Col, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { savePaymentMethod } from "../../action/CartAction"
import FormContainer from "../../components/shared/FormContainer"
import CheckoutSteps from "./CheckoutSteps"

const PaymentPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { shippingAddress } = useSelector((state) => state.cart)

  if (!shippingAddress) {
    history.push("/shipping")
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal")
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod()))
    history.push("/placeorder")
  }

  return (
    <FormContainer>
      console.log("Paymnt Portal")
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
        </Form.Group>
        <Col>
          <Form.Check
            type="radio"
            label="PayPal or Credit Card"
            id="PayPal"
            name="paymentMethod"
            value="PayPal"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
          <Form.Check
            type="radio"
            label="Stripe"
            id="Stripe"
            name="paymentMethod"
            value="Stripe"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
        </Col>
        <Button type="submit" variant="dark">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage
