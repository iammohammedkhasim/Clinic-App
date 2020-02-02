import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { saveAs } from "file-saver";

class Create extends Component {
  state = {
    name: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    tests: [
      {
        name: "test1",
        price: "20",
        type: "Haematology"
      },
      {
        name: "test2",
        price: "20",
        type: "Haematology"
      }
    ]
  };
  handleSubmit = ev => {
    ev.preventDefault();
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, this.state.name + ".pdf");
      });
  };
  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Patient details
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          placeholder="Enter name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="phoneNumber">
                        <Form.Label>Mobile:</Form.Label>
                        <Form.Control
                          placeholder="Phone number"
                          value={this.state.phone_number}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="address1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        placeholder="1234 Main St"
                        value={this.state.address1}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="address2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control
                        placeholder="Apartment, studio, or floor"
                        value={this.state.address2}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Row>
                      <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          value={this.state.city}
                          onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          as="select"
                          value={this.state.state}
                          onChange={this.handleChange}
                        >
                          <option>None</option>
                          <option>Telangana</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          value={this.state.zip}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </Jumbotron>
    );
  }
}

export default Create;
