import React, {Component} from 'react';
import StaffData from '../data/staff.js';
import {Card, Icon, Image, Grid, Segment, Header, Divider} from 'semantic-ui-react';

export default class Staff extends Component {
  render() {
    let staff = StaffData().map((item) => {
      return (<Card style={{width: "20%"}} raised={true} key={item.key}>
        <Image src={item.img} style={{
            height: "200px",
            width: "100%",
            objectFit: "cover"
          }}/>
        <Card.Content>
          <Card.Header>
            {item.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {item.position}
            </span>
          </Card.Meta>
          <Card.Description>
            {item.bio}
          </Card.Description>
        </Card.Content>

      </Card>)
    })
    return (<Grid>
        <Grid.Column>
          <Header size='huge'color="blue" style={{textTransform: "uppercase"}}>Our Staff</Header>
          <Card.Group style={{display: "flex", justifyContent: "center"}}>
            {staff}
          </Card.Group>

        </Grid.Column>
    </Grid>)
  }
}
