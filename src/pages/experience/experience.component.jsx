import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import L_SHATTAK from "../../assets/img/experience/shattak.jpg";
import L_INTREPID from "../../assets/img/experience/intrepid.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_SHATTAK} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS, Nodejs, MongoDB, Cloud (AWS)
                    <br />
                    <strong>Duration:</strong> December 2020 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Designed and Co-created</strong> the Cloud (AWS) Architecture
                      </li>
                      <li><strong>Co-designed</strong>  the UI/UX of the website
                      </li>
                      {/* <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements.</li> */}
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Tilt>
            <br /><br />
            <Tilt options={{ max: 29 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_INTREPID} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Student Mentor</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Web Developer</strong>
                    <br /> */}
                    {/* <strong>Technologies Mentored at:</strong> React JS, Nodejs, MongoDB, Cloud (AWS)
                    <br /> */}
                    <strong>Duration:</strong> November 2020 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Technologies Mentored at :-</strong>  HTML5, CSS3, Javascript,</li>
                      <li>Mentored lots of students till now in the field of web development
                      </li>
                      <li>Guide them the roadmap for career at <strong>web developer (React)</strong>
                      </li>
                      {/* <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements.</li> */}
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
