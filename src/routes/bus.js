import React from "react";
import {Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Bus() {

    return (
        <div className="routeBg">
            <Container className="p-4 pt-lg-5 contentArea">
                <h5 className="h3 mb-5 text-md-center text-white">Bus Booking</h5>
                <Form className="p-lg-5 jumbotron">
                    <Form.Control type="text" placeholder="Origin City"/>
                    <Form.Control type="text" placeholder="Destination City"/>
                    <Form.Label>Travel Date</Form.Label>
                    <Form.Control type="date"/>
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
                    <Button type="submit" variant="warning">Search</Button>
                    <Button type="clear" variant="outline-secondary">Clear</Button>
                </Form>
            </Container>
        </div>
    );

}