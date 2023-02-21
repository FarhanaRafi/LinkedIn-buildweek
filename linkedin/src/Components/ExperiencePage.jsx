import React from "react";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import ExperienceModal from "./ExperienceModal";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExperiencesAsync } from "../Redux/Actions";
import EditExperienceModal from "./EditExperienceModal";

const ExperiencePage = () => {
  const profiles = useSelector((state) => state.profiles.profiles);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = useSelector((state) => state.profile.data);
  console.log(id._id, "id");
  const experienceFromRedux = useSelector(
    (state) => state.experience.experiences
  );
  console.log(experienceFromRedux._id, "exp id");
  console.log(experienceFromRedux, "exp");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperiencesAsync(id._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8} className="mt-3">
            <Card className="mt-3 mb-5">
              <Card.Body style={{ height: "100%" }}>
                <Card.Text>
                  <div className="mb-3 d-flex  mr-auto">
                    <h5>Experience</h5>
                    <span className="ml-auto">
                      <BsPlusLg onClick={handleShow} />
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <ExperienceModal />
                      </Modal>
                    </span>
                  </div>

                  {experienceFromRedux.map((exp) => {
                    return (
                      <div>
                        <span>
                          <div className="ml-4 h6 d-flex">
                            {"  "}
                            <strong>{exp.role}</strong>
                            <span className="ml-auto">
                              <FiEdit2 onClick={handleShow} />
                              <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                              >
                                <EditExperienceModal expId={id._id} />
                              </Modal>
                            </span>
                          </div>
                          <div className="ml-4 mt-n2">
                            {exp.company}, {exp.area}
                            <br />
                            {exp.startDate} -{exp.endDate}
                            <br />
                            {exp.description}{" "}
                          </div>
                        </span>
                        <hr />
                      </div>
                    );
                  })}
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
