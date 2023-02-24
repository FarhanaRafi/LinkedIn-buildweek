import React from "react";
import { Modal, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsFillBookmarkFill } from "react-icons/bs";

const FeedLeft = () => {
  const myData = useSelector((state) => state.profile.data);
  return (
    <>
      <Card className="mt-4">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          style={{ height: "12vh" }}
        />
        <Card.Img
          src={myData.image}
          className="mt-n4"
          style={{
            borderRadius: "50%",
            height: "60px",
            width: "60px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <Card.Body style={{ height: "100%" }}>
          <Card.Text>
            <h6>
              <strong>
                {myData.name} {myData.surname}
              </strong>
              <span className="text-muted"> (She/Her)</span>
            </h6>
            <p className="mt-n1">{myData.title}</p>
            <p className="mt-n1">
              Front end development using html, css, java script, bootstrap,
              reactJS, redux etc..
            </p>
            <hr />

            <p className="ml-auto text-muted d-flex">
              <small> connections</small>{" "}
              <span className="text-primary ml-auto">300</span>
            </p>
            <p className="text-muted ml-auto d-flex mt-n2">
              <small>Who's viewed your profile</small>
              <span className="text-primary ml-auto">120</span>
            </p>
            <hr />
            <p>
              <BsFillBookmarkFill />
              <strong className="text-muted"> My Items</strong>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="sticky-side1">
        <Modal.Dialog className=" mt-4">
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
      </div>
    </>
  );
};

export default FeedLeft;
