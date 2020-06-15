import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import FormLabel from "react-bootstrap/FormLabel";
import Col from "react-bootstrap/Col";
import {CardImg, Container, Dropdown} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import CardDeck from "react-bootstrap/CardDeck";
import Card, {CardBody, CardFooter, CardImgOverlay} from "react-bootstrap/Card";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import {InputGroupRadio} from "react-bootstrap/InputGroup";

class App extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.setState({
      endDate: date
    })
  };

  render() {
    return (
        <div>
          {/*Navigation and Routes Area*/}
          <div id="nav-bar">
            <Navbar bg="light" variant="light" className={""} style={{borderBottom: "5px solid darkorange"}} expand="lg">
              <Navbar.Brand href="#home">
                <img
                    src={require("./img/Logo.png")}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mr-2"
                    alt="React Bootstrap logo"
                />
                PAID Travel and Tours</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Flights</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Hotels</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Transport</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">Terms of Use</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">About Us</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                  <Button variant="warning">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>

          {/*Content*/}
          <div>

            {/*Bookings*/}
            <section>
              <div className={"topArea"}>
                <div className={"line1"}/>
                <Jumbotron className="jumbotron1">
                  <Container>
                    <h3 className="bookingHeader">Where are you going?</h3>
                    <Form className="bookingHeader">
                      <Row>
                        <Col>
                          <input type={"radio"} value={"one way"} label={"One Way"} name={"One Way"}/>
                          <FormLabel>One Way</FormLabel>
                        </Col>
                        <Col>
                          <input type={"radio"} value={"one way"} label={"One Way"} name={"One Way"}/>
                          <FormLabel>Return</FormLabel>
                        </Col>
                        <Col/><Col/><Col/>
                      </Row>
                      <Row>
                        <Col>
                          <FormLabel>
                            From
                          </FormLabel>
                          <FormControl placeholder={"Departure"} ></FormControl>
                        </Col>
                        <Col>
                          <FormLabel>
                            To
                          </FormLabel>
                          <FormControl  placeholder={"Country/City/Airport"} ></FormControl>
                        </Col>
                        <Col>
                          <FormLabel>
                            Depart
                          </FormLabel>
                          <DatePicker className={"form-control"}
                                      selected={this.state.startDate}
                                      onChange={this.handleChange}
                          />
                        </Col>
                        <Col>
                          <FormLabel>
                            Return
                          </FormLabel>
                          <DatePicker className={"form-control"}
                                      selected={this.state.startDate}
                                      onChange={this.handleChange}
                          />
                        </Col>
                        <Col>
                          <FormLabel>
                            Cabin Class & Travellers
                          </FormLabel>
                          <Row className="input-group">
                            <Form.Control as="select">
                              <option>Adult</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </Form.Control>
                            <FormControl placeholder={"Child"}></FormControl>
                            <FormControl placeholder={"Infant"}></FormControl>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col>
                              <input type={"radio"} name="flight" value={"domestic"}/>
                              <FormLabel>Domestic</FormLabel>
                              <br/>
                              <input type={"radio"} name="flight" value={"domestic"}/>
                              <FormLabel>International</FormLabel>
                            </Col>
                          </Row>
                        </Col>
                        <Col/><Col/><Col/>
                        <Col>
                          <Button variant="primary" className="pb-2 float-md-right p-2 m-3"> Search Flights </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                </Jumbotron>
              </div>
            </section>

            {/*Services*/}
            <section style={{paddingBottom: "3rem"}}>
              <div className={"line2"}></div>
              <Container className="py-5 text-center">
                <div className="container">
                  <h2 className="text-center">Services</h2>
                  <p className="text-muted mb-5 text-center">There are many variations of passages of Lorem
                    Ipsum
                    available, but the majority have suffered alteration in some form.</p>
                  <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-3">
                      <div>
                        <img className={"servicesIcons"} src={require("./img/piggybank.svg")}/>
                      </div>
                      <h6>Affordable</h6>
                      <p className="text-muted">Ex cupidatat eu officia consequat incididunt labore
                        occaecat ut
                        veniam labore et cillum id et.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                      <div>
                        <img className={"servicesIcons"} src={require("./img/tick-inside-circle.svg")}/>
                      </div>
                      <h6>Safe</h6>
                      <p className="text-muted">Tempor aute occaecat pariatur esse aute amet.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                      <div>
                        <img className={"servicesIcons"} src={require("./img/tree.svg")}/>
                      </div>
                      <h6>Easy to use</h6>
                      <p className="text-muted">Voluptate ex irure ipsum ipsum ullamco ipsum reprehenderit
                        non ut
                        mollit commodo.</p>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            {/*Packages*/}
            <section style={{background:"#eeeeee", padding: "7rem"}}>
              <div className={"line3"}></div>
              <Container>
                <h3 className="text-center">Packages</h3>
                <CardDeck>
                  <Card style={{width: "15rem"}}>
                    <Card.Body>
                      <Card.Img/>
                      <Card.Title>
                        Hotel Package
                      </Card.Title>
                      <Card.Text>
                        The information contained will be for the tourists with a flight and hotel package.
                      </Card.Text>
                      <Button>More Info</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{width: "15rem"}}>
                    <Card.Body>
                      <Card.Img></Card.Img>
                      <Card.Title>
                        Tours Packages
                      </Card.Title>
                      <Card.Text>
                        The information contained here will be for the flights and tours package.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{width: "15rem"}}>
                    <Card.Body>
                      <CardImg></CardImg>
                      <Card.Title>
                        Transport Options
                      </Card.Title>
                      <Card.Text>
                        This card is optional and can include the transportation
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </Container>
            </section>

            {/*Popular*/}
            <section style={{padding: "7rem"}}>
              <Container>
                <h3 className="text-lg-left m-5">Popular Now</h3>
                <Container>
                  <CardDeck>
                    <Card className={"locations"}>
                      <Card.Body>
                        <CardImg src={require("./img/rsz_manila.jpg")} style={{border: "1px solid white"}}></CardImg>
                        <Card.Title>
                          Manila
                        </Card.Title>
                        <Card.Text>
                          This is some text within a card body.
                        </Card.Text>
                        <Button style={{background: "darkorange", color:"midnightblue", fontFamily:"helvetica", fontStyle:"bold"}}>
                          Book Now
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card className={"locations"}>
                      <Card.Body>
                        <CardImg src={require("./img/london.jpg")} style={{border: "1px solid white"}}></CardImg>
                        <Card.Title>
                          London
                        </Card.Title>
                        <Card.Text>
                          This is some text within a card body.
                        </Card.Text>
                        <Button style={{background: "darkorange", color:"midnightblue", fontFamily:"helvetica", fontStyle:"bold"}}>
                          Book Now
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card className={"locations"}>
                      <Card.Body>
                        <CardImg src={require("./img/london.jpg")} style={{border: "1px solid white"}}></CardImg>
                        <Card.Title>
                          London
                        </Card.Title>
                        <Card.Text>
                          This is some text within a card body.
                        </Card.Text>
                        <Button style={{background: "darkorange", color:"midnightblue", fontFamily:"helvetica", fontStyle:"bold"}}>
                          Book Now
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Col>
                        <TwitterTimelineEmbed
                            sourceType="timeline"
                            screenName="travel"
                            options={{height: 400}}
                        />
                      </Col>
                    </Card>
                  </CardDeck>
                </Container>
              </Container>
            </section>

            {/*Contact*/}
            <section style={{background: "midnightblue"}}>
              <div className="container contact">
                <div className="row">
                  <div className="col-md-3">
                    <div className="contact-info">
                      <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                      <h2 style={{color: "white"}}>Enquiries</h2>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="contact-form">
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="fname"
                                 placeholder="John" name="fname"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="lname"
                                 placeholder="Smith" name="lname"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="email"
                                 placeholder="john.smith@email.com" name="email"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="message">Message:</label>
                        <div className="col-sm-10">
                          <textarea className="form-control" rows="5" id="comment"></textarea>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="submit" className="btn btn-default">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/*Footer*/}
            <div className="footer">
              <footer>
                <Container>
                  <Row>
                    <Col className={"useful"}>
                      <Row><a href="#">Useful Link</a></Row>
                      <Row><a href="#">Useful Link</a></Row>
                      <Row><a href="#">Useful Link</a></Row>
                      <Row><a href="#">Useful Link</a></Row>
                      <Row><a href="#">Useful Link</a></Row>
                    </Col>
                    <Col>
                      <Row><a href="#">Useful Link</a></Row>
                      <Row><a href="#">Useful Link</a></Row>
                      <Row><a href="#">Useful Link</a></Row>
                      <Row><a href="#">Useful Link</a></Row>
                      <Row><a href="#">Useful Link</a></Row>
                    </Col>
                  </Row>
                </Container>
                <hr style={{background: "grey"}}/>
                <Row>
                  <Col className={"footerCopyright"}>© 2020 PAID Travel and Tours</Col>
                  <Col className={"footerCopyright"}>Reactive Media Designs</Col>
                </Row>
              </footer>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
