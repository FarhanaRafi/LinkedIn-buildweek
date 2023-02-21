import React from "react";
import { Card } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import ExperienceModal from "./ExperienceModal";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const Experience = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Card className="mt-3">
          <Card.Body style={{ height: "73vh" }}>
            <Card.Text>
              <div className="mb-3 d-flex  mr-auto">
                <h5>Experience</h5>
                <span className="ml-auto">
                  <BsPlusLg onClick={handleShow} />
                </span>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <ExperienceModal />
                </Modal>

                <Link to="/experience-page" className="ml-3 ">
                  <FiEdit2 />
                </Link>
              </div>

              <div>
                <span>
                  <h6>
                    <img
                      src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536"
                      alt="logo"
                      height={25}
                    />
                    {"  "}
                    <strong>EPICODE Global</strong>
                  </h6>
                  <div className="ml-4 mt-n2">
                    Web Development Bootcamp
                    <br />
                    Nov 2022
                    <br />
                    Front end development using html, css, java script,
                    bootstrap, reactJS, redux etc.. Backend development using
                    node js, mongo etc..Front end development using html, css,
                    java script, bootstrap, reactJS, redux etc..{" "}
                    <span className="mr-auto text-muted ml-5">see more...</span>
                    <p className="mt-4">
                      {" "}
                      <strong>Skills:</strong>
                      Cascading Style Sheets (CSS) · HTML5 · Node.js · MongoDB ·
                      Web Services API · AJAX · Bootstrap · Redux.js · React.js
                      · JavaScript · Presentation Skills · Teamwork
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
      </div>
    </>
  );
};

export default Experience;
