import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Airlines() {

    return (
        <div className="routeBg">
            <Container className="p-4 pt-lg-5 contentArea">
                <h5 className="h3 mb-5 text-md-center text-white">Airline Booking</h5>
                <Form className="p-lg-5 jumbotron">
                    <Row>
                        <Col className="col-md-2">
                            <input type={"radio"} value={"one way"} label={"One Way"} name={"One Way"}/>
                            <FormLabel>One Way</FormLabel>
                        </Col>
                        <Col>
                            <input type={"radio"} value={"one way"} label={"One Way"} name={"One Way"}/>
                            <FormLabel>Return</FormLabel>
                        </Col>
                    </Row>
                    <Form.Control type="text" placeholder="Origin City"/>
                    <Form.Control type="text" placeholder="Destination City"/>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date"/>
                    <Form.Label>Class</Form.Label>
                    <FormControl as="select">
                        <option>Economy</option>
                        <option>Business</option>
                    </FormControl>
                    <FormLabel>Adult(12+)</FormLabel>
                    <FormControl as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </FormControl>
                    <FormLabel>Child</FormLabel>
                    <FormControl as="select">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </FormControl>
                    <FormLabel>Infant</FormLabel>
                    <FormControl as="select">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </FormControl>
                    <Form.Group>
                        <div className="mr-1">
                            <Form.Check inline></Form.Check>
                            <FormLabel>Senior Citizen</FormLabel>
                        </div>
                    </Form.Group>
                    <FormLabel>Preferred Airlines</FormLabel>
                    <FormControl></FormControl>
                    <Button type="submit" variant="warning">Submit</Button>
                    <Button type="clear" variant="outline-secondary">Clear</Button>
                </Form>
            </Container>
        </div>
    );

}