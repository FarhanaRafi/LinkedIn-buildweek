import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const profiles = useSelector((state) => state.profiles.profiles);
  const [numberOfProfiles, setNumberOfProfiles] = useState(8);
  const showMoreProfiles = () => {
    if (numberOfProfiles === 8) {
      setNumberOfProfiles(numberOfProfiles + 5);
    } else {
      setNumberOfProfiles(numberOfProfiles - 5);
    }
  };
  return (
    <>
      <Modal.Dialog>
        <Modal.Body>
          <p>
            Edit public profile & URL{" "}
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
            Add profile in another language{" "}
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
          <Modal.Title>People also viewed</Modal.Title>
        </Modal.Header>

        {profiles.slice(0, 3).map((profile) => {
          return (
            <Modal.Body>
              <img src={profile.image} alt="avatar" />
              <p>
                {profile.name} {profile.surname}
              </p>
              <p>{profile.title}</p>
              <Button variant="secondary">Connect</Button>
            </Modal.Body>
          );
        })}
      </Modal.Dialog>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>People you may know</Modal.Title>
        </Modal.Header>

        {profiles.slice(3, numberOfProfiles).map((profile) => {
          return (
            <Modal.Body>
              <p>
                {profile.name} {profile.surname}
              </p>
              <p>{profile.title}</p>
              <Button variant="secondary">Connect</Button>
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
  );
};

export default Sidebar;

/* 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmI1ZDgzODFmYzAwMTNmZmZhYzkiLCJpYXQiOjE2NzY4ODIyOTcsImV4cCI6MTY3ODA5MTg5N30.tXTRKsrzYRhp7tnq3X624lNXoM5ANXqqLAIEIxKpuFU
*/
