import React, { Component } from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react'


export default class Map extends Component {

  render(){


    return (
      <div className="col-md-6">
      <a href="https://www.google.com/maps/dir//spartanburg,+sc/"><img className="img-fluid" src="https://maps.googleapis.com/maps/api/staticmap?center=spartanburg,+sc&zoom=13&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cspartanburg,+sc" alt="Google Map of spartanburg, sc"/></a>
      <Divider/>
        <Header as='h3' icon>
    <Icon name='location arrow' color="blue"/>
    Location
    <Header.Subheader>
      364 S. Pine St., Ste. A101
    </Header.Subheader>
    <Header.Subheader>
      Spartanburg, South Carolina
    </Header.Subheader>
  </Header>

      </div>
    )
  }
}
