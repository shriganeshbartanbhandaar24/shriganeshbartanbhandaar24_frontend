import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import FormContainer from "../../components/shared/FormContainer";

const AdminLoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const formSubmitHandler = () => {
    if (!email && !password) {
      return;
    }
  };
  return (
    <main className="mt-4">
      <FormContainer>
        <Form onSubmit={formSubmitHandler}>
          <FormGroup className="mt-3">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter the email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mt-3">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </FormContainer>
    </main>
  );
};

export default AdminLoginPage;
