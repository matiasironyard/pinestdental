import React, {Component} from 'react';
import Staff from '../data/staff.js';
import { Card, Icon, Image, Grid, Segment, Container, Header, Divider} from 'semantic-ui-react';


export default class Doctor extends Component {
  render() {
    return (


      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <Container>
            <Header size='huge' color="blue">
              Dr. Figueroa-Valle
              <Header.Subheader>
              About
              </Header.Subheader>
            </Header>

          <Divider/>
            Dr. Figueroa will make your teeth shine!
          </Container>

        </Grid.Column>
        <Grid.Column width={6}>
          <Image src='./images/Omar Figueroa-valle Favorites-0009.jpg' />

        </Grid.Column>

      </Grid>



    )
  }
}
