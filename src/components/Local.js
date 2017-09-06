import React, { Component } from 'react';
import Map from '../components/Map.js'

export default class Local extends Component{
  render(){
    return(
      <section className="row no-gutters justify-content-center space local">

          <Map/>
          <div className="col-5 my-auto">
            <h4>Contact Us</h4>
            <p>(864) 582-5000</p>
            <h4>Hours</h4>
              <p>open all day every day</p>
          </div>

      </section>
    )
  }
}
