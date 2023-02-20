import React from "react";
import { Card } from "react-bootstrap";

const Education = () => {
  return (
    <>
      <div>
        <Card className="mt-3">
          <Card.Body style={{ height: "65vh" }}>
            <Card.Text>
              <h5 className="mb-3">
                <strong>Education</strong>
              </h5>
              <p>
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
                  <p className="ml-4 mt-n2">
                    Web Development Bootcamp
                    <br />
                    Nov 2022Nov 2022
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
                  </p>
                </span>
              </p>
              <hr />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Education;
