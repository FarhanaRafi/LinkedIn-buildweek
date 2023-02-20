import React from "react";
import { Card } from "react-bootstrap";

const Resource = () => {
  return (
    <>
      <div>
        <Card className="mt-3">
          <Card.Body style={{ height: "25vh" }}>
            <Card.Text>
              <h5>
                <strong>About</strong>
              </h5>
              <p className="mt-n1">
                <span>
                  Aspiring developer with past experience in BioTechnology.
                  Currently a student learning full stack web development
                  (finishing soon). Skilled in frontend development using
                  html-css-javascript, react, redux, bootstrap and backend using
                  nodejs, express, mongodb etc..{" "}
                </span>
                <p className="text-end text-muted">See more...</p>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Resource;
