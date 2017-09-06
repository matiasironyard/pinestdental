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
              View Services
            </button>
            <Modal target={modalTarget} services={items} details={items.details}/>
          </div>
        </div>
        </div>
      )
    })
    return (
      <section className="services-row">
        <div className="row-fluid services-header">
          <h1 className="services-heading">Pine Street Dental
            <span className="sub-headings">Services</span>
          </h1>
        </div>
        <div className="row justify-content-center service-cards-row">
          {categories}
        </div>
      </section>
    )
  }
}
