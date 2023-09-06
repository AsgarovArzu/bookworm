import React, { Component } from 'react';
import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import Catalog from './components/Catalog';



class App extends Component {
  render() { 
    return (
      <React.Fragment>
            <Header/>
            {/* <Main/> */}
            <Catalog></Catalog>
            {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default App;