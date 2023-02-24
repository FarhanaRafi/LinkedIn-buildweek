import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MdVisibility } from "react-icons/md";
import { BsFillPeopleFill, BsSearch } from "react-icons/bs";

const Detail = () => {
  return (
    <>
      <div>
        <Card className="mt-3">
          <Card.Body style={{ height: "100%" }}>
            <Card.Text>
              <h5>
                <strong>Analytics</strong>
              </h5>
              <p className="mt-n1">
                <span className="text-muted">
                  <MdVisibility />
                  <span className="ml-2">Private to you</span>
                </span>
              </p>
              <Row>
                <Col xs={12} md={5}>
                  <p className="mt-n1"></p>
                  <p className="mt-n2">
                    <span>
                      <BsFillPeopleFill /> <strong>7 profile views </strong>
                    </span>
                    <p className="ml-4">
                      profile views Discover who's
                      <br />
                      viewed your profile.
                    </p>
                  </p>
                </Col>
                <Col xs={12} md={5}>
                  <p>
                    <BsSearch />
                    <strong className="ml-2">2 search appearances</strong>

                    <p className="ml-4">
                      search appearances See how often you appear in search
                      results.
                    </p>
                  </p>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Detail;
