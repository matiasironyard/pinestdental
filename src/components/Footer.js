import React, { Component } from 'react';

export default class Footer extends Component{
  render(){
    return(
      <footer className="row justify-content-center space">
        <div className="col-12">
          <p className="float-right"><a href="#">Back to top</a></p>
          <p>&copy; 2018 Pine Street Dental</p>
        </div>
      </footer>
    )
  }
}
