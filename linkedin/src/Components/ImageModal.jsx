import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addImageAsync } from "../Redux/Actions";

function ImageModal() {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const formData = new FormData();
  const userId = useSelector((state) => state.profile.data._id);

  const addImageEventHandler = (event) => {
    event.preventDefault();
    setImage(event.target.files[0]);
    console.log(image, "files");
    // if (image !== 0) {
    //   // dispatch(addImageAsync(formData, userId));
    // }
    // formData.append(dispatch(addImageAsync(image)));
    console.log(formData, "formData");
  };

  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="file"
                rows={4}
                // placeholder="What do you want to talk about"
                onChange={(e) => addImageEventHandler(e)}
              />
              {console.log(image, "imgsdfghj")}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" /*onClick={props.handleClose}*/>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              formData.append("profile", image);
              dispatch(addImageAsync(formData, userId));
            }}
          >
            Upload
          </Button>
        </Modal.Footer>
      </div>
    </>
  );
}

export default ImageModal;
