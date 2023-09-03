import React, { Component } from 'react';
import "./style.css"
import Arrow from './arrows.png'
import Bookworm from './Bookworm.png'
class Subscribe extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="subscribe">
                    <p class='sub-text'>
                    Subscribe to us to keep abreast of  the latest novelties from the world of literature.
                    </p>
                    <form className="right">
                        <label htmlFor="" className="label-text">Join our newsletter</label>
                        <input type="email" className="input-email"  placeholder="Email address"/>
                        <button className="btn btn-primary bt"> <img src={Arrow} alt="" /> </button>

                    </form>
                </div>

                <div className="footer">
                    <div className="row">
                        <div className="col-4">
                            <div className="logo-footer mg">
                                <img src={Bookworm} alt="" />
                            </div>

                        </div>
                        <div className="col-2">
                            <div className="mg">
                                <p className="head-text">Product</p>
                                <p className='alt-text'>Books</p>
                                <p className='alt-text'>Sales</p>
                                <p className='alt-text'>Events</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="mg">
                                    <p className="head-text">Company</p>
                                    <p className='alt-text'>About Us</p>
                                    <p className='alt-text'>Contact Us</p>

                                </div>
                        </div>
                        <div className="col-2">
                            <div className="mg">
                                    <p className="head-text">Information</p>
                                    <p className='alt-text'>Forum</p>
                                    <p className='alt-text'>Support</p>
                                </div>
                        </div>
                        <div className="col-2">
                            <div className="mg">
                                    <p className="head-text">Location</p>
                                    <p className='alt-text'>Krakow, Poland</p>
                                    
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">

                        </div>
                        <div className="col-4">

                        </div>
                        <div className="col-4">
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Subscribe;