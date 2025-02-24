import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../../image/logo.png";
import { UserContext } from "../../context/UserContext";
import { FaCircleUser } from "react-icons/fa6";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
const Menu = () => {
    const { usuario } = useContext(UserContext);
    return (
        <Navbar className="bg-body-tertiary" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt="Logo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    Hospital UPDS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <BsMenuButtonWideFill /> Menu
                        </Nav.Link>
                        <Nav.Link>
                            <FaCircleUser /> {usuario.name}
                        </Nav.Link>
                        <NavDropdown
                            title={
                                <span>
                                    <IoSettings style={{ marginRight: "5px" }} />
                                    Opcion
                                </span>
                            }
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                <FaUserEdit/> Mi cuenta
                            </NavDropdown.Item>
                            
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                               <FaPowerOff/> Salir
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
