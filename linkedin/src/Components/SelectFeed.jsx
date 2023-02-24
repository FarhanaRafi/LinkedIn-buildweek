import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedPostAsync } from "../Redux/Actions";
import { Row, Col, Container, Card, Dropdown, Modal } from "react-bootstrap";
import FeedLeft from "./FeedLeft";
import FeedSide from "./FeedSide";
import { FiMoreHorizontal, FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import UpdateFeed from "./UpdateFeed";
import { useState } from "react";
import { format } from "date-fns";
import "../styles/selectfeed.css"

const SelectFeed = (props) => {
  let selectedPost = useSelector((state) => state.selectedPost.selected);
  const myData = useSelector((state) => state.profile.data);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(id, "_____________");
  useEffect(() => {
    dispatch(getSelectedPostAsync(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(selectedPost, "selected");
  return (
    <>
      <Container className="selectfeed-footer-bottom">
        <Row>
          <Col xs={12} md={3}>
            <FeedLeft />
          </Col>
          <Col xs={12} md={6}>
            <Card body className="mt-4 mb-4">
              <div className="d-flex">
              <img
                  src={myData.image}
                  alt="profile"
                  height={50}
                  style={{ borderRadius: "50%"}}
                />
                <div>
                <strong className="ml-3 d-block">{selectedPost ? selectedPost.username : ""}</strong>
                <span className="text-muted mt-n3 ml-3">
                {selectedPost
                  ? format(new Date(selectedPost.createdAt), "dd LLL, yyyy")
                  : ""}
              </span>
              </div>
                <span className="ml-auto">
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent">
                      <FiMoreHorizontal />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={handleShow}
                        handleClose={handleClose}
                      >
                        <FiEdit2 className="mr-3" /> Edit Post
                      </Dropdown.Item>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <UpdateFeed
                          post={selectedPost}
                          handleClose={handleClose}
                        />
                      </Modal>
                      <Dropdown.Item onClick={handleShow}>
                        <AiFillDelete className="mr-3" />
                        Delete Post
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
                
              </div>
             
              <hr />
              <div>{selectedPost ? selectedPost.text : ""}</div>
              {selectedPost.image ? (
                <img
                  src={selectedPost.image}
                  alt="post"
                  style={{ width: "100%" }}
                  height={250}
                  className="mt-3"
                />
              ) : (
                ""
              )}
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <FeedSide />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SelectFeed;
