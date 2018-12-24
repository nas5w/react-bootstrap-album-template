import React from 'react';
import {
    Col,
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Row
} from 'reactstrap';

const Header = ({ collapsed, toggleNavbar, socialLinks }) => {
    return (
        <header>
            <Navbar color="dark" dark>
                <Container>
                    <Collapse isOpen={!collapsed} navbar>
                        <Row>
                            <Col sm="8" md="7" className="py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">
                                    Add some information about the album below,
                                    the author, or any other background context.
                                    Make it a few sentences long so folks can
                                    pick up some informative tidbits. Then, link
                                    them off to some social networking sites or
                                    contact information.
                                </p>
                            </Col>
                            <Col sm="4" md={{ offset: 1 }} className="py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    {socialLinks.map((link, key) => {
                                        return (
                                            <li key={key}>
                                                <a
                                                    href={link.url}
                                                    className="text-white"
                                                >
                                                    {link.text}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                        </Row>
                    </Collapse>
                    <NavbarBrand
                        href="/"
                        className="d-flex align-items-center mr-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                        >
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                        <strong>Album</strong>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
