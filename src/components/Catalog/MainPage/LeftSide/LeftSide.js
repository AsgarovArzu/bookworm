import React, { Component } from 'react';
import './LeftSide.css'
import PriceRangeSlider from './PriceRangeSlider/PriceRangeSlider';
import Category from './Category';
class LeftSide extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="left-side">
                <p className="price-range">Price Range</p>
                    <div> <PriceRangeSlider/> </div>
                    <div> <Category/> </div>
            </div>
            </>
        );
    }
}

export default LeftSide;