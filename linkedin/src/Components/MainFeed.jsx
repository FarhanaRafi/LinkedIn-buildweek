import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FeedLeft from "./FeedLeft";
import FeedSide from "./FeedSide";
import NewsFeed from "./NewsFeed";

const MainFeed = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <FeedLeft />
          </Col>
          <Col xs={12} md={6}>
            <NewsFeed />
          </Col>
          <Col xs={12} md={3}>
            <FeedSide />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainFeed;
