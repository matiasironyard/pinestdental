import React, { Component } from 'react';


export default class Modal extends Component{
  render(){
    console.log('a', this.props.description)
    let details = this.props.details.map((items)=>{
      let key = Math.random()
      return (
        <li key={key} className="list-group-item">
          <h5>{items.service}</h5>
          <p>{items.description}</p>
        </li>
      )
    })
    return(
      <div className="modal fade bd-example-modal-lg" id={this.props.target} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{this.props.services.service}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {details}
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
