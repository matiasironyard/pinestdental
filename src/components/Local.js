import React, { Component } from 'react';
import Map from '../components/Map.js'

export default class Local extends Component{
  render(){
    return(
      <section className="row no-gutters justify-content-center space local">

          <Map/>
          <div className="col-5 my-auto">
            <h2>Contact Us</h2>
          </div>

      </section>
    )
  }
}
