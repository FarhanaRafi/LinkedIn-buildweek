import React from "react";
import { Modal } from "react-bootstrap";

const FeedLeft = () => {
  return (
    <>
      <Modal.Dialog>
        <Modal.Body>
          <div className="d-flex">
            <p>Promoted</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
              className="ml-auto"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row">
              <img
                src="https://images.unsplash.com/photo-1592093947163-51f1d258d110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW4lMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="linkedIn logo"
                className="sidebar-promoted-images"
              />{" "}
              <h6 className="text-muted ml-3">Invitation from LinkedIn</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-compact-right ml-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                />
              </svg>
            </div>
            <div className="d-flex flex-row">
              <img
                src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="google logo"
                className="sidebar-promoted-images"
              />{" "}
              <h6 className="text-muted ml-3">Everyone Googles</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-compact-right ml-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                />
              </svg>
            </div>
            <div className="d-flex flex-row">
              <img
                src="https://images.unsplash.com/photo-1562783912-21ad31ee2a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="jaguar logo"
                className="sidebar-promoted-images"
              />{" "}
              <h6 className="text-muted ml-3">Work More Efficiently</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-compact-right ml-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                />
              </svg>
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
};

export default FeedLeft;
