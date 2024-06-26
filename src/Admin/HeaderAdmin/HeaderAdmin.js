import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/admin");
    };

    return (
        <div className="headerAdmin">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="headerAdmin-list" id="basic-navbar-nav">
                        <Nav className="headerAdmin-list-header">
                            <Link to="/listmenu" className="headerAdmin-list-header_child" href="#home">
                                Quản lí Menu
                            </Link>
                            <Link to="/manage" className="headerAdmin-list-header_child" href="#link">
                                Quản lí đặt bàn
                            </Link>
                        </Nav>
                        <div className="headerAdmin-user">
                            <h5>
                                Hello <span>UIT Food</span>
                            </h5>
                            <p className="headerAdmin-user_LogOut" onClick={handleLogout}>
                                LogOut<i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </p>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderAdmin;
