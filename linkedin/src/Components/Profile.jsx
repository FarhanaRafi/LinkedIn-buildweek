import Main from "./Main";
import Sidebar from "./Sidebar";
import { Col, Row, Container } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={7}>
            <Main />
          </Col>
          <Col xs={12} md={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
