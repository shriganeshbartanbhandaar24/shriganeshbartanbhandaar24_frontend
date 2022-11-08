import React, { useEffect, useState } from "react"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap"
import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userLogin } from "../../action/userAction"
import FormContainer from "../shared/FormContainer"
import Loader from "../shared/Loader"
import Message from "../shared/Message"

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { error, loading, userInfo } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  useEffect(() => {
    if (userInfo) {
      history.push("/")
    }
  }, [userInfo, history])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email && !password) {
      error = "Please fill the data"
      return
    }

    dispatch(userLogin(email, password))
  }
  const responseGoogle = async (response) => {
    const token = response.tokenId
  }
  return (
    <main className="mt-4">
      <h1 className="text-center">Log In</h1>
      <FormContainer>
        {loading && <Loader />}
        {error && <Message />}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="stevejobs@example.com"
              required
            />
          </Form.Group>
          <FormGroup className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="sshhh!!! Don't tell anyone"
              required
            />
          </FormGroup>
          <Button className="w-100 mb-3" type="submit">
            Log In
          </Button>

          <GoogleLogin
            clientId="540416185973-nc42qto5vpucrvd5su7t2no6uf106jh3.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="mb-3 w-100"
              >
                Continue with Google
              </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
            buttonText="Contine with Google"
            render={GoogleAuthButton}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}

          <Row>
            <Col className="text-center py-3">
              <span className="text-lead">Don't have an account? </span>
              <Link to={"/register"}>Sign Up</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </main>
  )
}

export default LoginPage
