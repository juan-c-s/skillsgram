import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Container } from "@mui/material";
import Header from "../layout/Header";
function PageNotFound() {
  return (
    <div>
    <Header />
    <Container maxWidth="sm" className="text-center mt-20">
      <img
        src="/not_found.png"
        alt="404 Not Found"
        className="mx-auto mb-8"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Typography variant="h4" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go Back to Home
      </Button>
    </Container>
    </div>
  );
}

export default PageNotFound;
