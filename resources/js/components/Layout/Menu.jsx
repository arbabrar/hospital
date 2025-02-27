import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Spinner } from "react-bootstrap";
import usePostPetition from "../../hooks/usePostPetition";
import Logo from "../../../image/logo.png";
import { UserContext } from "../../context/UserContext";
import { FaCircleUser, FaPowerOff } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const { usuario } = useContext(UserContext);
    const [inputData] = useState({});
    const { respuesta, cargando, iniciarSolicitud } = usePostPetition("auth/logout", inputData, false);
    const navigate = useNavigate();

    const closeSession = () => {
        iniciarSolicitud();
    };

    useEffect(() => {
        if (respuesta) {
            localStorage.removeItem("appCredential");
            localStorage.removeItem("UPDSHospital");
            alert(respuesta.message);
            navigate("/login");
        }
    }, [respuesta, navigate]);

    // ✅ Si `usuario` no está cargado, mostrar un loader
    if (!usuario) {
        return (
            <Navbar className="bg-body-tertiary" fixed="top">
                <Container fluid>
                    <Navbar.Brand>
                        <img alt="Logo" src={Logo} width="30" height="30" className="d-inline-block align-top" />{" "}
                        Hospital UPDS
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Spinner animation="border" variant="primary" size="sm" />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

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
                            <BsMenuButtonWideFill /> Menú
                        </Nav.Link>
                        <Nav.Link>
                            <FaCircleUser /> {usuario?.name || "Usuario"}
                        </Nav.Link>
                        <NavDropdown
                            title={
                                <span>
                                    <IoSettings style={{ marginRight: "5px" }} />
                                    Opciones
                                </span>
                            }
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#mi-cuenta">
                                <FaUserEdit /> Mi cuenta
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={closeSession} disabled={cargando}>
                                {cargando ? <Spinner animation="border" size="sm" /> : <FaPowerOff />} Salir
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
