import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedPostAsync } from "../Redux/Actions";
import { Row, Col, Container, Card, Dropdown } from "react-bootstrap";
import FeedLeft from "./FeedLeft";
import FeedSide from "./FeedSide";
import { FiMoreHorizontal, FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const SelectFeed = (props) => {
  let selectedPost = useSelector((state) => state.selectedPost.selected);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id, "_____________");
  useEffect(() => {
    dispatch(getSelectedPostAsync(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(selectedPost, "selected");
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <FeedLeft />
          </Col>
          <Col xs={12} md={6}>
            <Card body className="mt-4">
              <div className="d-flex">
                <strong>{selectedPost.username}</strong>
                <span className="ml-auto">
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent">
                      <FiMoreHorizontal />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <FiEdit2 className="mr-3" /> Edit Post
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <AiFillDelete className="mr-3" />
                        Delete Post
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </div>
              <hr />
              <div>{selectedPost.text}</div>
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

//  const fetchSelectedPost = async () => {
// try {
//     let res = await fetch(
//       `https://striveschool-api.herokuapp.com/api/posts/`,
//       {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzNDZlNDgzODFmYzAwMTNmZmZhZDkiLCJpYXQiOjE2NzY4ODg0NzAsImV4cCI6MTY3ODA5ODA3MH0.AYIsvNXcD-Xnx3yf_2zgpkcNNyuB19GZwp9jMm6Y6Jc",
//         },
//       }
//     );
//     if (res.ok) {
//       let data = await res.json();
//       console.log(data, "+++++++++");
//       dispatch({
//         type: GET_SELECTED_POST,
//         payload: data,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
