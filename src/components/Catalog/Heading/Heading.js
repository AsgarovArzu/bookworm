import React, { Component } from 'react';
import  './Heading.css';
class MainPage extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p className="addressBar"><span>Home</span>  / <span>Catalog</span> / <span>Bestsellers</span></p>
                        </div>
                        <div className="col-6 text-center" >
                            <form className="form-up" action="">
                                <label className="ctrl-label" htmlFor="sort">Sort by</label>
                                <select className="select" name="sort" id="">
                                    <option value="lastUpdated">Last Updated</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="new">Newest</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MainPage;