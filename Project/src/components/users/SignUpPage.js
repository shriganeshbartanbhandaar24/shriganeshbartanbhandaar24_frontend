import React from "react"
import FormContainer from "../shared/FormContainer.js"
import { useDispatch } from "react-redux"
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap"
import GoogleLogin from "react-google-login"
import { useState } from "react"
import GoogleLoginButton from "../shared/GoogleLoginButton.js"
import Message from "../shared/Message.js"
import { userSignUp } from "../../action/userAction.js"

const SignUpPage = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [message, setMessage] = useState("")

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (!email && !name && !password && !confirmPassword && !mobile) {
      setMessage("Please fill the form correctly")
      return
    }
    if (password != confirmPassword) {
      setMessage("Password must match")
    }
    dispatch(userSignUp(name, mobile, password, email))
  }
  const responseGoogle = (response) => {
    const token = response.tokenId
  }
  return (
    <main className="mt-4">
      <h1 className="text-center">Sign Up</h1>
      <FormContainer>
        {message && <Message variant="info">{message}</Message>}
        <Form onSubmit={formSubmitHandler}>
          <FormGroup className="mb-3">
            <FormLabel>First Name</FormLabel>
            <FormControl
              value={name}
              type="text"
              placeholder="Enter Your Name..."
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>Mobile</FormLabel>
            <FormControl
              value={mobile}
              type="text"
              placeholder="Enter Your Mobile Number..."
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Email-Id</FormLabel>
            <FormControl
              value={email}
              type="email"
              placeholder="Enter Your Last Name..."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              type="password"
              placeholder="Enter Your Password..."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={confirmPassword}
              type="password"
              placeholder="Enter Your Last Name..."
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit" className="w-100 mb-3">
            Sign Up
          </Button>
          <GoogleLogin
            className="mb-3"
            clientID="540416185973-ps5qf8vpb2fua1oqh3iookgmu0bur0ka.apps.googleusercontent.com"
            buttonText="Continue With Google"
            render={GoogleLoginButton}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </Form>
      </FormContainer>
    </main>
  )
}

export default SignUpPage
