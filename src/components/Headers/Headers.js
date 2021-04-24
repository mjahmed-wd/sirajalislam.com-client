import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useLanguage } from "../LanguageProvider/LanguageProvider";
// import { UserContext } from "../../App";
// import { handleSignOut } from "../Login/FirebaseRefectored";
import "./Headers.css";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  console.log(language);
  let history = useHistory();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-light bg-light"
        sticky="top"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>Siraj Al Islam</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
             

              <NavDropdown className="pr-5 pl-5 text-center"
                title={language === "en" ? "Sections" : "أقسام"}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Nav.Link onClick={() => history.push("/about-me")}>
                    About
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link onClick={() => history.push("/resume")}>
                    Resume
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link onClick={() => history.push("/islamic-banking")}>
                    Islamic Banking
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link onClick={() => history.push("/ppp")}>
                    Public Private Partnership
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link onClick={() => history.push("/ppp")}>
                    Public Private Partnership
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link onClick={() => history.push("/corporate")}>
                    Corporate M&A/ Capital Markets
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <h6 className="w-100"
                    onClick={() => history.push("/clientRecommendation")}
                  >
                    Client Recommendations
                  </h6>
                </NavDropdown.Item>
              </NavDropdown>
             
              {language === "en" ? (
                <button className="pl-3 pr-3" onClick={() => setLanguage("ar")}>
                  Arabic
                </button>
              ) : (
                <button className="pl-3 pr-3" onClick={() => setLanguage("en")}>
                  English
                </button>
              )}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
