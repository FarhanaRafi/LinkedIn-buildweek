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
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const profilesList = useSelector((state) => state.profiles.profiles);
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className="nav-bar-container-container">
      <div className="nav-bar-container">
        <div className="d-flex">
          <a href="/">
            <BsLinkedin className="in-icon linkedin-icon" />
          </a>
          <div className="search">
            <InputGroup className="mb-3 search-bar-container">
              <BiSearchAlt2 />
              <Form.Control
                className="search-bar"
                placeholder="Search"
                aria-label="search"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setSearchWord(e.target.value.toLowerCase());
                }}
              />
            </InputGroup>
            <div className="absolute mt-1 w-full p2 bg-white shadow-lg rounded-bl rounded-br max-h-36 overflow-y-auto search-results">
              {searchWord !== "" &&
                profilesList.map((person, index) => {
                  return (
                    (person.name.toLowerCase().includes(searchWord) ||
                      person.surname.toLowerCase().includes(searchWord)) && (
                      <div
                        key={index}
                        className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                      >
                        {person.name}, {person.surname}
                      </div>
                    )
                  );
                })}
            </div>
          </div>
        </div>
        <div className="icon-link-section">
          <Link to="/feed" className="links">
            {/* <a href="/" > */}
            <BsHouseDoorFill />
            Home
            {/* </a> */}
          </Link>
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
      <div
        className={
          navbar
            ? "nav-bar-second-line-container active"
            : "nav-bar-second-line-container"
        }
      >
        <div className="nav-bar-second-line d-flex justify-content-between align-items-center">
          <div className="profile-info-left d-flex align-items-center">
            <img src="https://picsum.photos/200" alt="profile" />
            <p>
              <strong> Eleni Kellermann</strong>
              <br />
              Student at EPICODE
            </p>
          </div>
          <div className="buttons-nav-bar-right">
            <button className="one-button">More</button>
            <button className="two-button">Add profile section</button>
            <button className="three-button">Open to</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
