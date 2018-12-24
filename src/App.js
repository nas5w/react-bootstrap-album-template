import React from 'react';
import {
    Button,
    Col,
    Collapse,
    Container,
    Jumbotron,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Row
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <header>
                    <Navbar color="dark" dark>
                        <Container>
                            <Collapse isOpen={!this.state.collapsed} navbar>
                                <Row>
                                    <Col sm="8" md="7" className="py-4">
                                        <h4 className="text-white">About</h4>
                                        <p className="text-muted">
                                            Add some information about the album
                                            below, the author, or any other
                                            background context. Make it a few
                                            sentences long so folks can pick up
                                            some informative tidbits. Then, link
                                            them off to some social networking
                                            sites or contact information.
                                        </p>
                                    </Col>
                                    <Col
                                        sm="4"
                                        md={{ offset: 1 }}
                                        className="py-4"
                                    >
                                        <h4 className="text-white">Contact</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-white"
                                                >
                                                    Follow on Twitter
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-white"
                                                >
                                                    Like on Facebook
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-white"
                                                >
                                                    Email me
                                                </a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Collapse>
                            <NavbarBrand href="/" className="mr-auto">
                                <strong>Album</strong>
                            </NavbarBrand>
                            <NavbarToggler
                                onClick={this.toggleNavbar}
                                className="mr-2"
                            />
                        </Container>
                    </Navbar>
                </header>
                <main role="main">
                    <Jumbotron className="text-center">
                        <Container>
                            <h1 className="jumbotron-heading">Album example</h1>
                            <p className="lead text-muted">
                                Something short and leading about the collection
                                below—its contents, the creator, etc. Make it
                                short and sweet, but not too short so folks
                                don't simply skip over it entirely.
                            </p>
                            <p>
                                <Button color="primary" className="my-2">
                                    Main call to action
                                </Button>
                                <Button color="secondary" className="my-2">
                                    Secondary action
                                </Button>
                            </p>
                        </Container>
                    </Jumbotron>
                </main>
            </div>
        );
    }
}
