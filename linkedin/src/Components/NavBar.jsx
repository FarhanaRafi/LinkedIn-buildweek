import { BsLinkedin } from "react-icons/bs";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <a href="/">
        <BsLinkedin />
      </a>
      <InputGroup className="mb-3">
        <Form.Control
          className="search-bar"
          placeholder="search"
          aria-label="search"
          aria-describedby="basic-addon2"
          //   onChange={(e) => {
          //     dispatch(getSongsActionAsync(e.target.value));
          //   }}
        />
      </InputGroup>
    </div>
  );
};
export default NavBar;
