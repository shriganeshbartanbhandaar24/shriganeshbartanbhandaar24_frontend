import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="mt-4 text-center">
      <h1>Look Like You are lost, let me take you home</h1>
      <Link to="/">
        <Button size="lg">Click Me</Button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
