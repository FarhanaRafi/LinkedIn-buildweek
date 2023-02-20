import Main from "./Main";
import Sidebar from "./Sidebar";
import { Col, Row, Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfilesAsync } from "../Redux/Actions";

const Profile = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfilesAsync())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
