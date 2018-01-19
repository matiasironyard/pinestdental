import React, {Component} from 'react';
import StaffData from '../data/staff.js';
import { Card, Icon, Image, Grid, Segment} from 'semantic-ui-react';


export default class Staff extends Component {
  render() {
    let staff = StaffData().map((item)=>{
      return (
        <Card>
    <Image src={item.img} style={{height: "200px", width: "200px", objectFit: "cover"}}/>
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

  </Card>
      )
    })
    console.log("hi",StaffData())
    return (


      <Grid>
        <Segment>
        <Grid.Column width={16}>
<Card.Group>
        {staff}
      </Card.Group>

        </Grid.Column>
        </Segment>
      </Grid>



    )
  }
}
