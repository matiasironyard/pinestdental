import React, { Component } from 'react';

export default class Footer extends Component{
  render(){
    return(
      <section className="row justify-content-center space">
        <footer className="col-12">
          <p className="float-right"><a href="#">Back to top</a></p>
          <p>&copy; 2017 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
      </section>
    )
  }
}
