import React, { Component } from 'react';
import Nav from '../components/Nav.js'
import Carousel from '../components/Carousel.js'
import Services from '../components/Services.js'
import Details from '../components/Details.js'
import Local from '../components/Local.js'
import Footer from '../components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Nav/>
        <Carousel/>
        <div className="row justify-content-center details-row">
          <div className="col-md-10 col-xs-12 details-col">
            <Details/>
          </div>
        </div>
        <Services/>
        <Local/>
        <Footer/>
      </div>
    );
  }
}

export default App;
