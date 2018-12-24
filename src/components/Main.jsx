import React from 'react';
import Album from './Album';
import { Button, Container, Jumbotron } from 'reactstrap';

const Main = ({ album }) => {
    return (
        <main role="main">
            <Jumbotron className="text-center">
                <Container>
                    <h1 className="jumbotron-heading">Album example</h1>
                    <p className="lead text-muted">
                        Something short and leading about the collection
                        below—its contents, the creator, etc. Make it short and
                        sweet, but not too short so folks don't simply skip over
                        it entirely.
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
            <Album album={album} />
        </main>
    );
};

export default Main;
