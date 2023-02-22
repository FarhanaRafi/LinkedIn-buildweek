import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteUpdateAsync, updatePostAsync } from "../Redux/Actions";

const UpdateFeed = (props) => {
  const [updatePost, setUpdatePost] = useState({
    text: props.post.text,
  });
  const postId = useSelector((state) => state.selectedPost.selected._id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePostAsync(postId, updatePost));
  });

  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Update a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(updatePostAsync(postId, updatePost));
            }}
          >
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What do you want to talk about"
                value={updatePost.text}
                onChange={(e) =>
                  setUpdatePost({
                    ...updatePost,
                    text: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteUpdateAsync(postId, props.handleClose));
            }}
          >
            Delete
            {/* onClick={props.handleClose}  */}
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(updatePostAsync(postId, updatePost, props.handleClose));
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </div>
    </>
  );
};

export default UpdateFeed;
