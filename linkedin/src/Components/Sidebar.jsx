import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const profiles = useSelector((state) => state.profiles.profiles);
  const [numberOfProfiles, setNumberOfProfiles] = useState(445);
  const showMoreProfiles = () => {
    if (numberOfProfiles === 445) {
      setNumberOfProfiles(numberOfProfiles + 5);
    } else {
      setNumberOfProfiles(numberOfProfiles - 5);
    }
  };
  return (
    <>
      <Modal.Dialog className="mt-5">
        <Modal.Body>
          <p className="d-flex">
            <span className="mr-3">Edit public profile & URL</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle-fill"
              viewBox="0 0 16 16"
              className="ml-auto"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
          </p>
          <hr />
          <p className="d-flex">
            <span className="mr-3">Add profile in another language</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-question-circle-fill ml-auto"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
          </p>
        </Modal.Body>
      </Modal.Dialog>

      <Modal.Dialog className="d-flex text-center">
        <Modal.Body className="sidebar-modal">
          <div className="d-flex">
            <p className="text-muted ml-auto">Ad</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
              className="align-content-end ml-2"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          <p className="text-muted">Get the latest jobs and industry news</p>
          <p>
            <img
              src={profiles[0].image}
              alt="profile pic"
              className="sidebar-company-logo-left mr-3"
            />

            <img
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="company logo"
              className="sidebar-company-logo ml-3"
            />
          </p>
          <p className="sidebar-text-explore">
            Farhana, explore relevant opportunities with <strong>#slack</strong>
          </p>
        </Modal.Body>

        <Button
          variant="outline-primary rounded-pill"
          className=" mb-2 sidebar-top-button mx-auto"
        >
          Follow
        </Button>
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="sidebar-headers">
            People also viewed
          </Modal.Title>
        </Modal.Header>

        {profiles.slice(452, 455).map((profile) => {
          return (
            <Modal.Body>
              <p className="d-flex">
                <img
                  className="sidebar-images mr-3 ml-2"
                  src={profile.image}
                  alt="avatar"
                />
                <div>
                  <h6 className="sidebar-name">
                    {profile.name} {profile.surname}
                  </h6>
                  <p className="sidebar-title">{profile.title}</p>
                </div>
              </p>

              <Button
                variant="outline-secondary rounded-pill "
                className="sidebar-button mt-n3 d-flex ml-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>{" "}
                <span className="ml-1 sidebar-connect">Connect</span>
              </Button>

              <hr className="mb-n3" />
            </Modal.Body>
          );
        })}
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="sidebar-headers">
            People you may know
          </Modal.Title>
        </Modal.Header>

        {profiles.slice(440, numberOfProfiles).map((profile) => {
          return (
            <Modal.Body>
              <p className="d-flex">
                <img
                  className="sidebar-images mr-3 ml-2"
                  src={profile.image}
                  alt="avatar"
                />
                <div className="sidebar-text">
                  <h6 className="sidebar-name">
                    {profile.name} {profile.surname}
                  </h6>
                  <p className="sidebar-title">{profile.title}</p>
                </div>
              </p>

              <Button
                variant="outline-secondary rounded-pill"
                className="mt-n3 sidebar-button d-flex ml-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-plus-fill"
                  viewBox="0 0 16 16"
                  className="sidebar-svg"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>{" "}
                <span className="ml-1 sidebar-connect">Connect</span>
              </Button>

              <hr className="mb-n3 " />
            </Modal.Body>
          );
        })}

        <Button
          variant="secondary"
          onClick={showMoreProfiles}
          className="sidebar-show-button"
        >
          Show {numberOfProfiles === 445 ? "more" : "less"}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-compact-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
            />
          </svg>
        </Button>
      </Modal.Dialog>

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

export default Sidebar;

/* 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmI1ZDgzODFmYzAwMTNmZmZhYzkiLCJpYXQiOjE2NzY4ODIyOTcsImV4cCI6MTY3ODA5MTg5N30.tXTRKsrzYRhp7tnq3X624lNXoM5ANXqqLAIEIxKpuFU


   <>
      <Modal.Dialog className="mt-5">
        <Modal.Body>
          <p>
            <span className="mr-3">Edit public profile & URL</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
          </p>
          <hr />
          <p>
            <span className="mr-3">Add profile in another language</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
          </p>
        </Modal.Body>
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Body>
          <p>Get the latest jobs and industry news</p>
        </Modal.Body>

        <Button>Follow</Button>
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="sidebar-headers">People also viewed</Modal.Title>
        </Modal.Header>

        {profiles.slice(0, 3).map((profile) => {
          return (
            <Modal.Body>
              <p className="sidebar-name">
                <img
                  className="sidebar-images mr-2"
                  src={profile.image}
                  alt="avatar"
                />
                {profile.name} {profile.surname}
              </p>
              <p className="mt-n3 ml-4 sidebar-title">{profile.title}</p>
              <Button variant="outline-secondary rounded-pill mt-n3 ml-4"  className="sidebar-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>  Connect</Button>
              <hr className="mb-n3" />
            </Modal.Body>
          );
        })}
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title className="sidebar-headers">People you may know</Modal.Title>
        </Modal.Header>

        {profiles.slice(3, numberOfProfiles).map((profile) => {
          return (
            <Modal.Body>
              <p className="sidebar-name">
                <img
                  className="sidebar-images mr-2"
                  src={profile.image}
                  alt="avatar"
                />
                {profile.name} {profile.surname}
              </p>
              <p className="mt-n3 ml-4 sidebar-title">{profile.title}</p>
              <Button variant="outline-secondary rounded-pill" className="mt-n3 ml-4 sidebar-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>  Connect
              </Button>
              <hr className="mb-n3 " />
            </Modal.Body>
          );
        })}

        <Button variant="secondary" onClick={showMoreProfiles}>
          Show {numberOfProfiles === 8 ? "more" : "less"}
        </Button>
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>LinkedIn Learning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>
              Add new skills with these courses, free for 24 hours
            </strong>
          </p>
        </Modal.Body>
        <Modal.Body>
          <p className="mt-n5">Recommendation</p>
        </Modal.Body>
        <Modal.Body>
          <p className="mt-n5">Recommendation</p>
        </Modal.Body>
        <Modal.Body>
          <p className="mt-n5">Recommendation</p>
        </Modal.Body>
        <Button variant="secondary">See my recommendations</Button>
      </Modal.Dialog>
    </>



/* 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmI1ZDgzODFmYzAwMTNmZmZhYzkiLCJpYXQiOjE2NzY4ODIyOTcsImV4cCI6MTY3ODA5MTg5N30.tXTRKsrzYRhp7tnq3X624lNXoM5ANXqqLAIEIxKpuFU


   <>
      <Modal.Dialog className="mt-5">
        <Modal.Body>
          <p>
            Edit public profile & URL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
          </p>
          <hr />
          <p>
            Add profile in another language
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
          </p>
        </Modal.Body>
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Body>
          <p>Get the latest jobs and industry news</p>
        </Modal.Body>

        <Button>Follow</Button>
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="sidebar-headers" >People also viewed</Modal.Title>
        </Modal.Header>

        {profiles.slice(0, 3).map((profile) => {
          return (
             <p className="sidebar-name">
                <img
                  className="sidebar-images mr-2"
                  src={profile.image}
                  alt="avatar"
                />
                {profile.name} {profile.surname}
              </p>
              <p className="mt-n3 ml-4 sidebar-title">{profile.title}</p>
              <Button variant="outline-secondary rounded-pill mt-n3 ml-4"  className="sidebar-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>  Connect</Button>
          );
        })}
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="sidebar-headers">People you may know</Modal.Title>
        </Modal.Header>

        {profiles.slice(3, numberOfProfiles).map((profile) => {
          return (
            <p className="sidebar-name">
                <img
                  className="sidebar-images mr-2"
                  src={profile.image}
                  alt="avatar"
                />
                {profile.name} {profile.surname}
              </p>
              <p className="mt-n3 ml-4 sidebar-title">{profile.title}</p>
              <Button variant="outline-secondary rounded-pill mt-n3 ml-4"  className="sidebar-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>  Connect</Button>
          );
        })}

        <Button variant="secondary" onClick={showMoreProfiles}>
          Show {numberOfProfiles === 8 ? "more" : "less"}
        </Button>
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>LinkedIn Learning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Add new skills with these courses, free for 24 hours</p>
        </Modal.Body>
        <Modal.Body>
          <p>Recommendation</p>
        </Modal.Body>
        <Modal.Body>
          <p>Recommendation</p>
        </Modal.Body>
        <Modal.Body>
          <p>Recommendation</p>
        </Modal.Body>
        <Button variant="secondary">See my recommendations</Button>
      </Modal.Dialog>
    </>



*/
