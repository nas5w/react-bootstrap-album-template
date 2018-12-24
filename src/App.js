import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import albumItems from './data/album';
import socialLinks from './data/socialLinks';
import './App.css';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            socialLinks: socialLinks,
            album: albumItems
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
                <Main album={this.state.album} />
                <Footer />
            </div>
        );
    }
}
