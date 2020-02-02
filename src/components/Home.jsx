import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome!</h1>
        <p>This is a sample data. Display any data here.</p>
      </Container>
    </Jumbotron>
  );
};

export default Home;
