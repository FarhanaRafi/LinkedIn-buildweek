import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostAsync, postImageAsync } from "../Redux/Actions";

const FeedModal = (props) => {
  const [addPost, setAddPost] = useState({
    text: "",
  });
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const formData = new FormData();
  let selectedPost = useSelector((state) => state.selectedPost.selected);

  const addImageHandler = (e) => {
    e.preventDefault();
    console.log(image, "post image");
    // setImage.push(...addPost, picture: e.target.files[0])
    // setImage((addPost) => {
    //   return { ...addPost, picture: e.target.files[0] };
    // });
    setImage(e.target.files[0]);
    // setImage({ ...addPost, picture: e.target.files[0] });
  };
  //   var newInput = Object.assign({},

  //   const imageElement

  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addPostAsync(props.handleClose, addPost));
            }}
          >
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What do you want to talk about"
                value={addPost.text}
                onChange={(e) =>
                  setAddPost({
                    ...addPost,
                    text: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="file"
                rows={4}
                placeholder="What do you want to talk about"
                onChange={(e) => addImageHandler(e)}
                // value={addPost.text}
                // onChange={(e) =>
                //   setAddPost({
                //     ...addPost,
                //     text: e.target.value,
                //   })
                // }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              formData.append("post", image);
              dispatch(addPostAsync(props.handleClose, addPost));
              formData.push({ image: image });
              dispatch(postImageAsync(formData, selectedPost));
            }}
          >
            Post
          </Button>
        </Modal.Footer>
      </div>
    </>
  );
};

export default FeedModal;
