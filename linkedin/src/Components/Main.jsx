import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyProfileAsync } from "../Redux/Actions";
import { Card, Button, Modal } from "react-bootstrap";
import Detail from "./Detail";
import Resource from "./Resource";
import Education from "./Education";
import Experience from "./Experience";
import Activity from "./Activity";
import ImageModal from "./ImageModal";

const Main = () => {
  const myData = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  // const [image, setImage] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(myData);

  useEffect(() => {
    dispatch(getMyProfileAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Card className="mt-5">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          style={{ height: "30vh" }}
        />
        <Card.Img
          onClick={handleShow}
          src={myData.image}
          className="ml-3 mt-n5"
          style={{ borderRadius: "50%", height: "90px", width: "90px" }}
        />
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <ImageModal handleClose={handleClose}/>
        </Modal>
        <Card.Body style={{ height: "39vh" }}>
          <Card.Text>
            <h5>
              <strong>
                {myData.name} {myData.surname}
              </strong>
              <span className="text-muted"> (She/Her)</span>
            </h5>
            <p className="mt-n1">{myData.title}</p>
            <p className="mt-n1">{myData.bio}</p>
            <p className="mt-n2">
              {myData.area},{" "}
              <span className="text-primary">
                <strong>Contact info</strong>
              </span>
            </p>
            <p className="text-primary mt-n2">
              <strong>100 connections</strong>
            </p>
            <Button variant="primary rounded-pill">Open to</Button>
            <Button variant="outline-primary rounded-pill" className="ml-2">
              Add profile section
            </Button>
            <Button variant="outline-secondary rounded-pill" className="ml-2">
              More
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Detail />
      <Resource />
      <Education />
      <Experience />
      <Activity />
    </>
  );
};

export default Main;
