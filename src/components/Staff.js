import React, {Component} from 'react';
import StaffData from '../data/staff.js';
import {Card, Icon, Image, Grid, Segment, Header, Divider} from 'semantic-ui-react';

export default class Staff extends Component {
  render() {
    let staff = StaffData().map((item) => {
      return (<Card  raised={true} key={item.key}>
        <Image src={item.img} style={{
            height: "300px",
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
          <Header size='huge'color="blue" style={{textTransform: "uppercase", padding: "30px 0"}}>Our Staff</Header>
          <Card.Group style={{display: "flex", justifyContent: "center"}} itemsPerRow={2}>
            {staff}
          </Card.Group>

        </Grid.Column>
    </Grid>)
  }
}
