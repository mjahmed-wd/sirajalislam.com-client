import React, { useContext } from "react";
import {
  Container,
  Button,
  DropdownButton,
  Nav,
  Navbar,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useLanguage } from "../LanguageProvider/LanguageProvider";
import engUk from "../../images/webp/engUkLanguage.png";
import arKsa from "../../images/webp/arKsaLanguage.png";
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
        show
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>Siraj Al Islam</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav" style={{ width: "100%" }}>
            <Nav className="ml-auto">   {language === "en" ? (
                <button className="nav_margin" onClick={() => setLanguage("ar")}>
                  <img src={engUk} style={{ width: "25px" }} alt="" />{" "}
                  <b>English</b>
                </button>
              ) : (
                <button className="nav_margin" onClick={() => setLanguage("en")}>
                  <img src={arKsa} style={{ width: "25px" }} alt="" />{" "}
                  <b className={language === "ar" ? "arabic oneOneRem" : ""}>
                    {" "}
                    عربى
                  </b>
                </button>
              )}

              <button className="nav_margin">
                <NavDropdown 
                // show
                  className=" text-center ml-3 mr-3"
                  title={language === "en" ? "Sections" : "أقسام"}
                  style={{ fontSize: language === "en" ? "1rem" : "1.1rem" }}
                  id="basic-nav-dropdown"
                  drop="left"
                  
                >

                  <NavDropdown.Item
                    href="#about"
                    className="nav_btn btn-secondary mb-2 oneOneRem"
                  >
                    {language === "en" ? `About` : `عني`}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#resume"
                    className="nav_btn btn-secondary mb-2 oneOneRem"
                  >
                    {language === "en"
                      ? `Resume`
                      : `نظرة مهنية
عامة`}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#islamic-banking"
                    className="nav_btn btn-secondary mb-2 oneOneRem"
                  >
                    {" "}
                    {language === "en"
                      ? `Islamic Banking`
                      : `المصرفية الإسلامية
/ التمويل /
تمويل المشاريع`}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#ppp"
                    className="nav_btn btn-secondary mb-2 oneOneRem"
                  >
                    {language === "en"
                      ? `Public Private Partnership`
                      : `الشراكة
بين القطاعين
العام والخاص (PPP)`}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#corporate"
                    className="nav_btn btn-secondary mb-2 oneOneRem"
                  >
                    {language === "en" ? ( "Corporate M&A / Capital Markets"
                    ) : (
                        "عمليات الدمج والاستحواذ للشركات / أسواق رأس المال"
                     
                    )}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#recommendations"
                    className="nav_btn btn-secondary mb-2 oneOneRem"
                  >
                    {language === "en"
                      ? `Client Recommendations`
                      : `توصية العملاء`}
                  </NavDropdown.Item>
                </NavDropdown>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
