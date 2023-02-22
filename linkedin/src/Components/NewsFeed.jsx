import React from "react";
import { useEffect } from "react";
import { Card, Form, Col, Row, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPostAsync } from "../Redux/Actions";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import FeedModal from "./FeedModal";

const NewsFeed = () => {
  const posts = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const [addPost, setAddPost] = useState({
  //     text: "",
  //   });

  useEffect(() => {
    dispatch(getPostAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const submitHandler =(e) =>{
  //     e.preventDefault()
  //   }
  return (
    <>
      <div>
        <Card body className="mt-3">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group as={Row}>
              {/* <Form.Label column sm="2">
                Password
              </Form.Label> */}
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Start a Post...."
                  onClick={handleShow}
                />

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <FeedModal handleClose={handleClose} />
                </Modal>
              </Col>
            </Form.Group>
          </Form>
        </Card>

        {posts.map((post) => {
          return (
            <Card body className="mt-3">
              <div className="d-flex ">
                <p>
                  <strong>{post.username}</strong>
                </p>
                <span className="ml-auto text-primary ">
                  {" "}
                  <BsPlusLg />
                  <span className="ml-2">Follow</span>
                </span>
              </div>
              <hr />

              {post.text}
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default NewsFeed;
