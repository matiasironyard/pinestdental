import React, {Component} from 'react';
import ServiceCategories from '../data/servicescatergories.js'
import Modal from '../components/Modal.js'

console.log(ServiceCategories())

export default class Services extends Component {
  render() {
    let self = this;
    let descriptions = ServiceCategories().map((items) => {
      return items.description
    })
    let categories = ServiceCategories().map((items) => {
      let key = Math.random();
      let modalTarget = Math.random().toString(36).substring(7);
      console.log('i', items)
      return (
        <div key={key} className="col-sm-5">
          <div className="card">
          <div className="card-body">
            <h4 className="card-title headings">{items.service}</h4>
            <p className="card-text">{items.description}</p>
            <button type="button" className="btn btn-default" data-toggle="modal" data-target={`#${modalTarget}`}>
              View Details
            </button>
            <Modal target={modalTarget} services={items} details={items.details}/>
          </div>
        </div>
        </div>
      )
    })
    return (
      <section className="services-row row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center service-cards-row">
                <div className="col-8 d-none d-lg-block services-header"/>
                <div className="col-lg-4 col-md-12 services-header-right">
                  <h1 className="services-heading">Pine Street Dental
                    <span className="sub-headings">Services</span>
                  </h1>
                  <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                </div>
            {categories}
            </div>
          </div>
      </section>
    )
  }
}
