import React, {Component} from 'react';
import Staff from '../data/staff.js';
import PineStBldg from '../images/pinestdentaloffice-6.jpg';
import Logo from '../images/logo.png';
import { Card, Icon, Image, Grid, Segment, Container, Header, Divider} from 'semantic-ui-react';


export default class Office extends Component {
  render() {
    return (


      <Grid stackable columns={2} style={{backgroundImage: `url(${PineStBldg})`, height: "500px", backgroundSize: "cover", backgroundPosition: "center"}}>
        <Grid.Column width={8} style={{backgroundColor: " rgba(233, 236, 239, 0.8)", display: "flex", alignItems: "center"}}>

            <Header size='huge' color="blue" style={{textTransform: "uppercase", padding: "50px"}}>Pine Street Dental
              <Divider/>
              <Header.Subheader style={{color: "rgba(0,0,0,.95)", lineHeight: "2"}}>
              Providing general dentistry to the family and friends of Spartanburg and the Upstate for over 40 years.
              </Header.Subheader>
            </Header>


        </Grid.Column>
        <Grid.Column width={8}>

        </Grid.Column>

      </Grid>



    )
  }
}
