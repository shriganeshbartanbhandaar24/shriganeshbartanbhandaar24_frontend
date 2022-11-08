import React from "react";
import { Button } from "react-bootstrap";

const GoogleLoginButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      className="w-100 mb-3"
    >
      Continue With Google
    </Button>
  );
};

export default GoogleLoginButton;
