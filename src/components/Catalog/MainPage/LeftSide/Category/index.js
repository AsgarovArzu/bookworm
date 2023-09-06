import React, { Component } from 'react';
// import Bestsellers from './Bestseller';
import Business from './Business';
import Drama from './Drama';
import Love from './Love';
import Horror from './Horror';
import Fantasy from './Fantasy';
import Trending from './Trending';
import Detective from './Detective';

class Category extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div> <Business/> </div>
             <div> <Drama/> </div>
                  <div> <Love/>  </div>
                <div> <Horror/> </div>
                 <div> <Fantasy/> </div>
                <div> <Trending/> </div>
                <div> <Detective/> </div>
            </>
        );
    }
}

export default Category;