import React, { Component } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import './ReaderChoice.css';
import {FaRegHeart} from "react-icons/fa"
import Book1 from "./img/book1.png"
import Book2 from "./img/book2.png"
class ReaderChoice extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="reader-choice">
                    <div className="part-1">
                        <span className='info'>
                            Our readers' choice <span className='arrow'> <AiOutlineArrowRight /> </span>
                        </span>
                    </div>
                    <div className="part-2">
                        <div className='book-1'>
                            <div className='img-con'>
                                <img src={Book1} className='img-1' alt="book-1" />
                            </div>
                            <div className='book-info'>
                                <p className="book-name">The Rook</p>
                                <p className="book-writer">Daniel O’malley</p>
                            <p className="book-about">
                                "The body you are wearing  used <br /> to be mine."
                                <br /> So begins the letter Myfanwy <br />
                                Thomas is holding when she <br />
                                awakes in a London park <br /> surrounded by bodies all <br /> wearing latex gloves. With...
                                </p>
                                <button className="btn cart-btn btn-primary btn-btn">Add  cart</button>
                                
                                <div className='heart'>
                                <span className="heart-icon hrt"> <FaRegHeart size="20px"/> </span>
                                </div>
                                
                            </div>
                    
                        </div>
                        <div className='book-2'>
                        <div className='img-con'>
                                <img src={Book2} className='img-1' alt="book-2" />
                            </div>
                            <div className='book-info'>
                                <p className="book-name">The Twisted Ones</p>
                                <p className="book-writer">T. Kingfisher</p>
                            <p className="book-about">
                            When a young woman clears out <br /> 
                            her deceased grandmother’s  <br />
                            home in rural North Carolina,  <br />
                            she finds long-hidden secrets  <br /> about a strange colony of <br />beings in the woods.
                            <br />
                            When Mouse’s dad asks her...
                                </p>
                                <button className="btn cart-btn btn-primary btn-btn">Add  cart</button>
                                
                                <div className='heart'>
                                <span className="heart-icon hrt"> <FaRegHeart size="20px"/> </span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ReaderChoice;