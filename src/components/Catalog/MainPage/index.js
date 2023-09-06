import React, { Component } from 'react';
import LeftSide from './LeftSide/LeftSide';
import Books from './Books';

class MainPage extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <LeftSide></LeftSide>
                    </div>
                    <div className="col-9 text-center">
                    <Books></Books>
                    </div>
                </div>
            </div>
                
            </>
        );
    }
}

export default MainPage;