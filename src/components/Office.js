import React, {Component} from 'react';
import Staff from '../data/staff.js';
import { Card, Icon, Image, Grid, Segment, Container, Header, Divider} from 'semantic-ui-react';


export default class Office extends Component {
  render() {
    return (


      <Grid stackable columns={2}>
        <Grid.Column width={10}>

          <Image src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/23659438_1961437344104732_843687273198331389_n.jpg?oh=d656090a8f4a5d28d4e0f901ee57f1ef&oe=5AFA2E25' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Container>
            <Header size='huge' color="blue">Pine Street Dental
              <Header.Subheader>
              About
              </Header.Subheader>
            </Header>

  <Divider/>
            dfadskjfkasjf asdfkjasdf asdkf asdfkjfkas dfaslkdfj
          </Container>
        </Grid.Column>

      </Grid>



    )
  }
}
