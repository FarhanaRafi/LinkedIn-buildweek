import React from "react";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import ExperienceModal from "./ExperienceModal";
import { useSelector } from "react-redux";

const ExperiencePage = () => {
  const profiles = useSelector((state) => state.profiles.profiles);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8} className="mt-3">
            <Card className="mt-3 mb-5">
              <Card.Body style={{ height: "73vh" }}>
                <Card.Text>
                  <div className="mb-3 d-flex  mr-auto">
                    <h5>Experience</h5>
                    <span className="ml-auto">
                      <BsPlusLg
                        onClick={() => {
                          <ExperienceModal />;
                        }}
                      />
                    </span>
                  </div>

                  <div>
                    <span>
                      <div className="d-flex ">
                        <img
                          src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536"
                          alt="logo"
                          height={25}
                        />
                        {"  "}
                        <h6>EPICODE Global</h6>
                        <span className=" mr-auto">
                          <FiEdit2 />
                        </span>
                      </div>

                      <div className="ml-4 mt-n2">
                        Web Development Bootcamp
                        <br />
                        Nov 2022
                        <br />
                        Front end development using html, css, java script,
                        bootstrap, reactJS, redux etc.. Backend development
                        using node js, mongo etc..Front end development using
                        html, css, java script, bootstrap, reactJS, redux etc..{" "}
                        <span className="mr-auto text-muted ml-5">
                          see more...
                        </span>
                        <p className="mt-4">
                          {" "}
                          <strong>Skills:</strong>
                          Cascading Style Sheets (CSS) · HTML5 · Node.js ·
                          MongoDB · Web Services API · AJAX · Bootstrap ·
                          Redux.js · React.js · JavaScript · Presentation Skills
                          · Teamwork
                        </p>
                      </div>
                    </span>
                  </div>
                  <hr />
                  <h6>
                    <img
                      src="https://images.cdn1.stockunlimited.net/preview1300/university-logo-design_1970415.jpg"
                      alt="logo"
                      height={30}
                    />
                    {"  "}
                    <strong>UNIVERSITY</strong>
                  </h6>
                  <p className="ml-4 mt-n2">
                    Master of Science -
                    <br />
                    <span className="text-muted">Aug 2017 - Apr 2019</span>
                    <br />
                    Grade:8.9
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title className="sidebar-headers">
                  People also viewed
                </Modal.Title>
              </Modal.Header>

              {profiles.slice(0, 3).map((profile) => {
                return (
                  <Modal.Body>
                    <p className="sidebar-name">
                      <img
                        className="sidebar-images mr-2"
                        src={profile.image}
                        alt="avatar"
                      />
                      {profile.name} {profile.surname}
                    </p>
                    <p className="mt-n3 ml-4 sidebar-title">{profile.title}</p>
                    <Button
                      variant="outline-secondary rounded-pill mt-n3 ml-4"
                      className="sidebar-button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-plus-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fill-rule="evenodd"
                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                        />
                      </svg>{" "}
                      Connect
                    </Button>

                    <hr className="mb-n3" />
                  </Modal.Body>
                );
              })}
            </Modal.Dialog>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExperiencePage;
