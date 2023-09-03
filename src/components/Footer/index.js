import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Subscribe from './Subscribe';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Container>
                <Subscribe />
                
            </Container>
                
            </>
        );
    }
}

export default Footer;