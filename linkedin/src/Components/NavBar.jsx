import {
  BsLinkedin,
  BsHouseDoorFill,
  BsPeopleFill,
  BsBriefcaseFill,
  BsBellFill,
} from "react-icons/bs";
import { BiMessageRoundedDots, BiSearchAlt2 } from "react-icons/bi";
import { TbGridDots } from "react-icons/tb";
import { Dropdown, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const profilesList = useSelector((state) => state.profiles.profiles);

  const checkingName = () => {
    profilesList.filter(
      (name) =>
        name.name.includes(searchWord) || name.surname.includes(searchWord)
    );
    console.log(profilesList);
  };
  return (
    <div className="nav-bar-container-container">
      <div className="nav-bar-container">
        <div className="relative">
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
              onChange={(e) => {
                setSearchWord(e.target.value);
                checkingName(e.target.value);
              }}
            />
          </InputGroup>
          <div className="absolute mt-1 w-full p2 bg-white shadow-lg rounded-bl rounded-br max-h-36 overflow-y-auto">
            {searchWord !== "" &&
              profilesList.map((person, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                  >
                    {person.name}, {person.surname}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="icon-link-section">
          <a href="/" className="links">
            <BsHouseDoorFill />
            Home
          </a>
          <a href="/" className="links">
            <BsPeopleFill />
            My Network
          </a>
          <a href="/" className="links">
            <BsBriefcaseFill />
            Jobs
          </a>
          <a href="/" className="links">
            <BiMessageRoundedDots />
            Messaging
          </a>
          <a href="/" className="links">
            <BsBellFill />
            Notifications
          </a>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="links">
              <img
                src="https://picsum.photos/200"
                alt="profile"
                className="profile-picture"
              />
              Me
            </Dropdown.Toggle>

            <Dropdown.Menu alignRight>
              <div className="dropdown-top">
                <img
                  src="https://picsum.photos/200"
                  alt="profile"
                  className="dropdown-profile-picture"
                />
                <p>
                  <span>Eleni Kellermann</span> <br />
                  Student at EPICODE
                </p>
              </div>
              <Dropdown.Item href="#/action-1" className="view-profile-button">
                View Profile{" "}
              </Dropdown.Item>
              <hr />
              <h5>Account</h5>
              <Dropdown.Item href="#/action-3">
                Try Premium for free
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Settings & Privacy
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Help</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Language</Dropdown.Item>
              <hr />
              <h5>Manage</h5>
              <Dropdown.Item href="#/action-2">Posts & Activity</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Job Posting Account
              </Dropdown.Item>
              <hr />
              <Dropdown.Item href="#/action-2">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="right-nav-section">
          <a href="/" className="links">
            <TbGridDots />
            Work
          </a>
          <a className="premium-link" href="/">
            Try Premium for free
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
