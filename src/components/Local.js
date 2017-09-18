import React, { Component } from 'react';
import Map from '../components/Map.js'

export default class Local extends Component{
  render(){
    return(
      <section className="row no-gutters justify-content-center space local">
          <Map/>
          <div className="col-md-5 contact-pane">
            <h4>Contact Us</h4>
            <p>(864) 582-5000</p>
            <hr/>
            <div className="col">
              <h4>Business Hours</h4>
              <div className="row justify-content-center">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Morning</th>
                      <th>Afternoon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Monday</th>
                      <td>8:30 a.m - 12 p.m</td>
                      <td>1 - 5 p.m</td>
                    </tr>
                    <tr>
                      <th scope="row">Tuesday</th>
                        <td>8:30 a.m - 12 p.m</td>
                        <td>1 - 5 p.m</td>
                    </tr>
                    <tr>
                      <th scope="row">Wednesday</th>
                        <td>8:30 a.m - 12 p.m</td>
                        <td>1 - 5 p.m</td>
                    </tr>
                    <tr>
                      <th scope="row">Thursday</th>
                        <td>8:30 a.m - 12 p.m</td>
                        <td>1 - 5 p.m</td>
                    </tr>
                    <tr>
                      <th scope="row">Friday-Sunday</th>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

      </section>
    )
  }
}
