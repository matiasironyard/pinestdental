import React, {Component} from 'react';

export default class Details extends Component {
  render() {
    return (
      <section className="details row no-gutters  justify-content-center">


        <div className="row featurette justify-content-start doctor main-panels">
          <div className="col-md-5 panels">
            <h2 className="featurette-heading">About
              <span className="sub-headings">Dr. Figueroa</span>
            </h2>
            <hr/>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
        </div>


        <div className="row featurette justify-content-center office main-panels">
          <div className="col-md-5 ml-auto panels">
            <h2 className="featurette-heading">About
              <span className="sub-headings">Pine Street Dental</span>
            </h2>
            <hr/>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
        </div>

        {/*<div className="row featurette justify-content-start office main-panels">
          <div className="col-md-5  panels">
            <h2 className="featurette-heading">About
              <span className="sub-headings">Pine Street Dental</span>
            </h2>
            <hr/>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
        </div>*/}

      </section>
    )
  }
}
