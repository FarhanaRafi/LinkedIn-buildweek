import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditExperienceModal = (props) => {
  const experienceId = props.expId;
  const [experienceObj, setExperienceObj] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
  });
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="notify-section"></div>
        <div className="form">
          <p>* Indicates required</p>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3 text-muted" controlId="title">
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Retail Sales Manager"
                onChange={(e) =>
                  setExperienceObj({
                    ...experienceObj,
                    role: e.target.value,
                  })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 text-muted" controlId="employment-type">
              <Form.Label>Employment type </Form.Label>
              <Form.Control type="text" placeholder="Please select" disabled />
              <Form.Text>
                Learn more about <a href="/">employment types.</a>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-muted" controlId="company-name">
              <Form.Label>Company name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Microsoft"
                required
                onChange={(e) =>
                  setExperienceObj({
                    ...experienceObj,
                    company: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3 text-muted" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: London, United Kingdom"
                onChange={(e) =>
                  setExperienceObj({
                    ...experienceObj,
                    area: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3 text-muted" controlId="location-type">
              <Form.Label>Location type </Form.Label>
              <Form.Control type="text" placeholder="Please select" disabled />
              <Form.Text>Pick a location type (ex: remote)</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-muted" controlId="start-date">
              <Form.Label>Start date* </Form.Label>
              <div>
                <Form.Control
                  type="date"
                  placeholder=""
                  required
                  onChange={(e) =>
                    setExperienceObj({
                      ...experienceObj,
                      startDate: e.target.value,
                    })
                  }
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 text-muted" controlId="end-date">
              <Form.Label>End date* </Form.Label>
              <div>
                <Form.Control
                  type="date"
                  placeholder=""
                  required
                  onChange={(e) =>
                    setExperienceObj({
                      ...experienceObj,
                      endDate: e.target.value,
                    })
                  }
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 text-muted" controlId="industry">
              <Form.Label>Industry* </Form.Label>
              <Form.Control type="text" placeholder="Ex: retail" disabled />
              <Form.Text>
                LinkedIn uses industry information to provide more relevant
                recommendations <br />
                <span>
                  Learn more about <a href="/">industry options</a>
                </span>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 text-muted" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setExperienceObj({
                    ...experienceObj,
                    description: e.target.value,
                  })
                }
              />
              <Form.Text>max. 2,000 char.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-muted" controlId="headline">
              <Form.Label>Profile headline </Form.Label>
              <Form.Control type="text" placeholder="" disabled />
              <Form.Text>
                Appears below your name at the top of the profile
              </Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="danger">Delete</Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </>
  );
};

export default EditExperienceModal;
