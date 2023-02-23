import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
//import { useDispatch } from 'react-redux';

function ImageModal() {
  //const dispatch = useDispatch()
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
              //dispatch(addPostAsync(props.handleClose, addPost));
            }}
          >
            <Form.Group>
              <Form.Control
                type="file"
                rows={4}
                placeholder="What do you want to talk about"
                /*value={addPost.text}
                onChange={(e) =>
                  setAddPost({
                    ...addPost,
                    text: e.target.value,
                  })
                }*/
              />
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
              //dispatch(addPostAsync(props.handleClose, addPost));
            }}
          >
            Post
          </Button>
        </Modal.Footer>
      </div>
    </>
  )
}

export default ImageModal