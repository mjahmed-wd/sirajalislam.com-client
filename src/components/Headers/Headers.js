import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import { UserContext } from "../../App";
// import { handleSignOut } from "../Login/FirebaseRefectored";
import "./Headers.css";

const Header = () => {

  
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
             

              
                <>
                  <Nav.Link
                    onClick={ () => history.push("/about-me")
                    }
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    onClick={ () => history.push("/resume")
                    }
                  >
                    Resume
                  </Nav.Link>
                  <Nav.Link
                    onClick={ () => history.push("/islamic-banking")
                    }
                  >
                    Islamic Banking
                  </Nav.Link>
                  <Nav.Link
                    onClick={ () => history.push("/ppp")
                    }
                  >
                    Public Private Partnership
                  </Nav.Link>
                  <Nav.Link
                    onClick={ () => history.push("/corporate")
                    }
                  >
                    Corporate M&A/ Capital Markets
                  </Nav.Link>
                  <Nav.Link
                    onClick={ () => history.push("/clientRecommendation")
                    }
                  >
                    Client Recommendation
                  </Nav.Link>
                  
                </>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;