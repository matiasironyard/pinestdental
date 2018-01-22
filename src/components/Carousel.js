import React, {Component} from 'react';
import PineStDentalStaff1 from '../images/pinestdentalstaff-1.jpg'
import PineStOffice1 from '../images/pinestdentaloffice-4.jpg'
import PineStOffice2 from '../images/pinestdentaloffice-5.jpg'

export default class Carousel extends Component {
  render() {
    return (
        <section id="myCarousel" className="carousel slide row" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="first-slide" style={{height: "600px", width: "100%", objectFit: "cover",  objectPosition: "top"}} src={PineStDentalStaff1}alt="First slide"/>
              <div className="container">
                <div className="carousel-caption d-none d-md-block text-left">
                  <h1 style={{textTransform: "uppercase"}}>Pine Street Dental</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#" role="button">About us</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="second-slide" style={{height: "600px", width: "100%", objectFit: "cover"}} src={PineStOffice1} alt="Second slide"/>
              <div className="container">
                <div className="carousel-caption d-none d-md-block">
                  <h1 style={{textTransform: "uppercase"}}>Services</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img className="third-slide" style={{height: "600px", width: "100%", objectFit: "cover"}} src={PineStOffice2} alt="Third slide"/>
              <div className="container">
                <div className="carousel-caption d-none d-md-block text-right">
                  <h1 style={{textTransform: "uppercase"}}>Schedule an appointment today</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#" role="button">Contact us</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </section>
    );
  }
}
