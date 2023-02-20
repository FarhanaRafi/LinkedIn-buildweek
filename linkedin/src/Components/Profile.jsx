import Main from "./Main";
import Sidebar from "./Sidebar";
import { Col, Row, Container } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={10}>
            <Main />
          </Col>
          <Col xs={12} md={2}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
