import React from "react";
import { useEffect } from "react";
import {
  Card,
  Form,
  Col,
  Row,
  Modal,
  OverlayTrigger,
  //Tooltip,
  Popover,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addToLikesAction,
  getPostAsync,
  removeFromLikesAction,
} from "../Redux/Actions";
import { BsPlusLg, BsCalendarDate } from "react-icons/bs";
import { useState } from "react";
import FeedModal from "./FeedModal";
import { HiOutlinePhotograph, HiOutlineLightBulb } from "react-icons/hi";
import { MdVideocam, MdOutlineArticle } from "react-icons/md";
import { FaHandsWash } from "react-icons/fa";
import { format } from "date-fns";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import { FiSmile } from "react-icons/fi";

const NewsFeed = () => {
  const posts = useSelector((state) => state.posts.post);
  const id = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [like, setLike] = useState(false);

  const likedPosts = useSelector((state) => state.like.content);

  const popoverHoverFocus = (
    <Popover id="popover-trigger-hover-focus">
      <AiFillLike className="text-primary ml-2" style={{ fontSize: "26px" }} />
      <FiSmile className="text-warning ml-2" style={{ fontSize: "26px" }} />
      <FaHandsWash className="text-success ml-2" style={{ fontSize: "26px" }} />
      <AiFillHeart className="text-danger ml-2" style={{ fontSize: "26px" }} />
      <HiOutlineLightBulb
        className="text-warning ml-2"
        style={{ fontSize: "26px" }}
      />
    </Popover>
  );

  const isLiked = (id) => likedPosts.includes(id);

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

        {posts.slice(0, 15).map((post) => {
          return (
            <Card body className="mt-3 mb-3">
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
                {post.image ? (
                  <img
                    src={post.image}
                    alt="post"
                    height={250}
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                ) : (
                  ""
                )}
              </p>
              <div className="d-flex">
                <span className="text-muted">
                  <AiFillLike className="text-primary" />
                  <small className="ml-2">Marius and 230 others</small>
                </span>
                <span className="ml-auto text-muted">
                  170 Comments. 34 Repost
                </span>
              </div>
              <hr />
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={popoverHoverFocus}
              >
                {isLiked(post._id) ? (
                  <span className="mr-5">
                    <AiFillLike
                      className="mr-2"
                      color="blue"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("unlike", post);

                        dispatch(removeFromLikesAction(post._id));
                        // setLike(false)
                      }}
                    />
                    Unlike
                  </span>
                ) : (
                  <span className="mr-4">
                    <AiFillLike
                      className="mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("like", post);

                        dispatch(addToLikesAction(post._id));
                        // setLike(false)
                      }}
                    />
                    Like
                  </span>
                )}
              </OverlayTrigger>
              {/* <span className="mr-5">
                <SlLike className="mr-2" /> Like
              </span> */}
              <span className="mr-5">
                <FaRegCommentDots className="mr-1" /> Comment
              </span>
              <span className="mr-5">
                <BiRepost className="mr-1" /> Repost
              </span>
              <span className="mr-5">
                <RiSendPlaneFill className="mr-1" /> Send
              </span>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default NewsFeed;
