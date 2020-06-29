import React from "react";
import {Tab, Tabs, Container} from "react-bootstrap";

export default function About() {

    return (
        <div className="routeBg">
            <div className="container-xl">
                <Container className="p-4 pt-lg-5 contentArea">

                    <h2 className="text-white">About Us</h2>

                    <div className="jumbotron">
                        <Tabs defaultActiveKey="who" id="uncontrolled-tab-example" variant="tabs">
                            <Tab eventKey="who" title="PAID">

                                <h1 className="h3 pt-3 pb-5">Progressive Asian Initiative Development</h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                <hr/>

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                <hr/>

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Tab>
                            <Tab eventKey="guide" title="Guide">
                                <h1 className="h4">Step 1: </h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <h1 className="h4">Step 2: </h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <h1 className="h4">Step 3: </h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                                <section>
                                    <div className="container contact">
                                        <div className="row shadow-lg">
                                            <div className="col-md-3">
                                                <div className="contact-info">
                                                    <img src="https://image.ibb.co/kUASdV/contact-image.png" style={{width: "20px", height: "auto"}}
                                                         alt="image"/>
                                                    <h5 style={{color: "white"}}>Enquiries</h5>
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
                            </Tab>
                        </Tabs>
                    </div>
                </Container>
            </div>
        </div>
    );
}