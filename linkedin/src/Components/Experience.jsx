import React from "react";
import { Card } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import ExperienceModal from "./ExperienceModal";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getExperiencesAsync } from "../Redux/Actions";
import { format } from "date-fns";

const Experience = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = useSelector((state) => state.profile.data);
  const experienceFromRedux = useSelector(
    (state) => state.experience.experiences
  );
  console.log(experienceFromRedux, "exp");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperiencesAsync(id._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [experienceFromRedux]);

  return (
    <>
      <div>
        <Card className="mt-3 mb-4">
          <Card.Body style={{ height: "100%" }}>
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
                  <ExperienceModal handleClose={handleClose} />
                </Modal>

                <Link to="/experience-page" className="ml-3 ">
                  <FiEdit2 />
                </Link>
              </div>
              {experienceFromRedux.map((exp) => {
                return (
                  <div>
                    <span>
                      <h6 className="ml-4">
                        {"  "}
                        <strong>{exp.role}</strong>
                      </h6>
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
      </div>
    </>
  );
};

export default Experience;
