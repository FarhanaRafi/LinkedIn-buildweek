import {
  BsLinkedin,
  BsHouseDoorFill,
  BsPeopleFill,
  BsBriefcaseFill,
  BsBellFill,
} from "react-icons/bs";
import { BiMessageRoundedDots, BiSearchAlt2 } from "react-icons/bi";
import { TbGridDots } from "react-icons/tb";
import { Form, InputGroup } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <a href="/">
        <BsLinkedin className="in-icon linkedin-icon" />
      </a>
      <InputGroup className="mb-3 search-bar-container">
        <BiSearchAlt2 />
        <Form.Control
          className="search-bar"
          placeholder="Search"
          aria-label="search"
          aria-describedby="basic-addon2"
          //   onChange={(e) => {
          //     dispatch(getSongsActionAsync(e.target.value));
          //   }}
        />
      </InputGroup>
      <div className="icon-link-section">
        <a href="/">
          <BsHouseDoorFill />
          Home
        </a>
        <a href="/">
          <BsPeopleFill />
          My Network
        </a>
        <a href="/">
          <BsBriefcaseFill />
          Jobs
        </a>
        <a href="/">
          <BiMessageRoundedDots />
          Messaging
        </a>
        <a href="/">
          <BsBellFill />
          Notifications
        </a>
        <a href="/">Me</a>
      </div>
      <div className="right-nav-section">
        <a href="/">
          <TbGridDots />
          Work
        </a>
        <a className="premium-link" href="/">
          Try Premium for free
        </a>
      </div>
    </div>
  );
};
export default NavBar;
