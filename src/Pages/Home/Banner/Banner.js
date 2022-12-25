import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import useAuth from "./../../../hooks/useAuth";
import "./Banner.css";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";





const Banner = () => {

   const { user, admin, editor, logout } = useAuth();
     const LogOut = () => {
        logout();
     };
   return (
      <div className="top-banner">
         <Navbar
            expand="lg"
            // bg="dark"
            variant="dark"
            collapseOnSelect
            style={{
               backgroundColor: "#241f1f",
            }}
            sticky="top"
         >
            <Container>
               <Navbar.Brand style={{ paddingRight: "700px" }}>
                  <img
                     src={logo}
                     width="75"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                  />{" "}
                  <div className="d-inline-block pt-2">
                     <span className="">
                        N E W B R I G H T <br />E C O M M E R C E
                     </span>
                  </div>
               </Navbar.Brand>
               <Navbar.Toggle />
               <Nav className="me-auto">
                  <Nav.Item className="pr-5">
                     <Nav.Link
                        eventKey="1"
                        as={Link}
                        to="/home"
                        className="text-white"
                     >
                        HOME
                     </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="pr-5">
                     <Nav.Link
                        eventKey="2"
                        as={Link}
                        to="/new-arrivals"
                        className="text-white"
                     >
                        SHOP
                     </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="pr-5">
                     <Nav.Link>
                        <HashLink
                           eventKey="3"
                           to="/home#featuredGear"
                           className="text-white"
                        >
                           EXPLORE
                        </HashLink>
                     </Nav.Link>
                  </Nav.Item>

                  <>
                     {admin ? (
                        <Nav.Link
                           as={Link}
                           to="/dashboard"
                           className="text-white"
                        >
                           DASHBOARD
                        </Nav.Link>
                     ) : (
                        <>
                           {editor ? (
                              <Nav.Link
                                 as={Link}
                                 to="/dashboard"
                                 className="text-white"
                              >
                                 DASHBOARD
                              </Nav.Link>
                           ) : (
                              <>
                                 {" "}
                                 {user?.email && !admin && !editor ? (
                                    <Nav.Link
                                       as={Link}
                                       to="/dashboard"
                                       className="text-white"
                                    >
                                       DASHBOARD
                                    </Nav.Link>
                                 ) : (
                                    ""
                                 )}
                              </>
                           )}
                        </>
                     )}
                  </>
                  {user?.displayName ? (
                     <Nav.Link
                        className="text-white"
                        onClick={LogOut}
                        variant=""
                     >
                        LOGOUT
                     </Nav.Link>
                  ) : (
                     <div className="">
                        <Nav.Link as={Link} to="/login" className="text-white">
                           SIGN IN/REGISTER
                        </Nav.Link>
                     </div>
                  )}
                  <Navbar.Text className="log-in d-inline-block">
                     {user?.displayName ? (
                        <span className="me-2 text-white ">Signed in as:</span>
                     ) : (
                        ""
                     )}
                     <div className="d-inline-block">
                        {user?.displayName}{" "}
                        <img
                           src={user?.photoURL}
                           className="rounded-circle ms-3 d-inline-block"
                           style={{ width: "55px" }}
                           alt=""
                        />
                     </div>
                  </Navbar.Text>
               </Nav>
               {/* <Navbar.Collapse>
                
               </Navbar.Collapse> */}
            </Container>
         </Navbar>
         <Container
            data-aos="fade-down"
            // data-aos-anchor-placement="top-center"
            // data-aos-easing="ease-in-out"
            data-aos-duration="1000"
         >
            {/* Top Banner Section Start */}

            <div>
               {" "}
               <h2 className="font-size pt-[600px] ">
                  END OF SUMMER SALE-EBRATION
               </h2>{" "}
               <p
                  className=""
                  style={{
                     fontSize: "20px",
                     letterSpacing: "1px",
                     paddingBottom: "1em",
                     color: "white",
                  }}
               >
                  Save 25% Sitewide - Including Sale Items - With Code
                  LABORDAY2022
               </p>
            </div>
            <div className="pb-[50px]">
               <Link to="/new-arrivals">
                  <button className="common-button">
                     <span className="text-white text-[20px]">
                        Shop New Arrivals
                     </span>
                  </button>
               </Link>
            </div>
            {/* Top Banner Section End */}
         </Container>
      </div>
   );
};

export default Banner;
