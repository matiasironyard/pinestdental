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
        <div key={key} className="col-sm-12  col-md-5 services">
          <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="200" height="200"/>
          <h2 className="headings">{items.service}</h2>
          <p>{items.description}</p>
          <button type="button" className="btn btn-default" data-toggle="modal" data-target={`#${modalTarget}`}>
            View Services
          </button>
          <Modal target={modalTarget} services={items} details={items.details}/>
        </div>
      )
    })
    return (
      <section className="row justify-content-md-center services-row">
        {categories}
      </section>
    )
  }
}
