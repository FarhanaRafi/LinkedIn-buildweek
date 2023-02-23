import React from "react";
import { useEffect } from "react";
import { Card, Form, Col, Row, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPostAsync } from "../Redux/Actions";
import { BsPlusLg, BsCalendarDate } from "react-icons/bs";
import { useState } from "react";
import FeedModal from "./FeedModal";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdVideocam, MdOutlineArticle } from "react-icons/md";
import { format } from "date-fns";

const NewsFeed = () => {
  const posts = useSelector((state) => state.posts.post);
  const id = useSelector((state) => state.profile.data);
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
        <Card body className="mt-4">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group as={Row} className="d-flex">
              <Form.Label column sm="2">
                <img
                  src={id.image}
                  alt="logo"
                  height={40}
                  style={{ borderRadius: "50%" }}
                />
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Start a Post...."
                  onClick={handleShow}
                  className="rounded-pill ml-n4 mt-2"
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
          <Col>
            <span onClick={handleShow}>
              <HiOutlinePhotograph className="text-primary" /> Photos
            </span>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <FeedModal handleClose={handleClose} />
            </Modal>
            <span className="ml-5">
              <MdVideocam
                className="text-success"
                style={{ fontSize: "20px" }}
              />{" "}
              Video
            </span>
            <span className="ml-5">
              <BsCalendarDate
                className="text-danger"
                style={{ fontSize: "20px" }}
              />{" "}
              Event
            </span>
            <span className="ml-5">
              <MdOutlineArticle
                className="text-danger"
                style={{ fontSize: "20px" }}
              />{" "}
              Write article
            </span>
          </Col>
        </Card>

        {posts.map((post) => {
          return (
            <Card body className="mt-3">
              <div className="d-flex ">
                <div>
                  {post.user && (
                    <img
                      src={post.user.image}
                      alt="profile"
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  )}
                  <strong className="ml-3">{post.username}</strong>
                  <p className=" text-muted mt-n3 create-date">
                    {format(new Date(post.createdAt), "dd LLL, yyyy")}
                  </p>
                </div>
                <span className="ml-auto text-primary ">
                  {" "}
                  <BsPlusLg />
                  <span className="ml-2">Follow</span>
                </span>
              </div>
              <hr />

              {post.text}
              <p>
                <img
                  src={post.image}
                  alt="post"
                  height={250}
                  style={{ width: "100%", marginTop: "10px" }}
                />
              </p>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default NewsFeed;
