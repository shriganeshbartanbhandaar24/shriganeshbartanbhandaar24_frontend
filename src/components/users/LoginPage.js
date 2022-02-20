import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../../action/userAction";
import FormContainer from "../shared/FormContainer";
import Loader from "../shared/Loader";
import Message from "../shared/Message";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, loading, userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    history.push("/users/dashboard");
  }, userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      error = "Please fill the data";
      return;
    }

    dispatch(userLogin(email, password));
  };
  const responseGoogle = async (response) => {
    const token = response.tokenId;
  };
  return (
    <main className="mt-4">
      <h1 className="text-center">Log In</h1>
      <FormContainer>
        {loading && <Loader />}
        {error && <Message />}
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="stevejobs@example.com"
              required
            />
          </FormGroup>
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
            <Col className="text-center">
              <span className="text-lead">Don't have an account? </span>
              <Link to="/users/signup">Sign Up</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </main>
  );
};

export default LoginPage;
