import React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import Header from './components/Header';
import Album from './components/Album';
import album from './data/album';
import socialLinks from './data/socialLinks';
import './App.css';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            socialLinks: socialLinks,
            album: album
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
                <Header
                    collapsed={this.state.collapsed}
                    toggleNavbar={this.toggleNavbar}
                    socialLinks={this.state.socialLinks}
                />
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
                                <Button color="primary" className="mx-1 my-2">
                                    Main call to action
                                </Button>
                                <Button color="secondary" className="my-2">
                                    Secondary action
                                </Button>
                            </p>
                        </Container>
                    </Jumbotron>
                    <Album album={this.state.album} />
                </main>
            </div>
        );
    }
}
