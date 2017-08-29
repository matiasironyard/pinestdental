import React, {Component} from 'react';

export default class Details extends Component {
  render() {
    return (
      <section className="space details">

        <hr class="featurette-divider"/>

        <div className="row featurette justify-content-start doctor main-panels">
          <div className="col-md-5 panels">
            <h2 className="featurette-heading">About
              <span className="sub-headings">Dr. Figueroa</span>
            </h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div className="row featurette justify-content-center services-list main-panels">
          <div className="col-md-5 ml-auto panels">
            <h2 className="featurette-heading">Dental
              <span className="sub-headings">Services</span>
            </h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div className="row featurette justify-content-start office main-panels">
          <div className="col-md-5  panels">
            <h2 className="featurette-heading">About
              <span className="sub-headings">Pine Street Dental</span>
            </h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
        </div>

        <hr class="featurette-divider"/>

      </section>
    )
  }
}
