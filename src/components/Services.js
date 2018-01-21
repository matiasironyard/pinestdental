import React, {Component} from 'react';
import ServiceCategories from '../data/servicescatergories.js'
import Modal from '../components/Modal.js';
import img from '../images/0012.jpg';
import { Card, Icon, Image, Grid, Segment, Container, Header, Divider, List} from 'semantic-ui-react';

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
        <List.Item key={key} as='a'>
          <List.Content>
        <List.Header style={{textTransform:   "uppercase", paddingBottom: "15px"}}>{items.service}</List.Header>

        <List.Description style={{lineHeight: "1.5"}}>
          {items.description}
        </List.Description>
      </List.Content>
      <Divider/>
      </List.Item>
      )
    })
    return (
      <Grid stackable columns={2}>

        <Grid.Column width={9}>

          <Image size="large" src={img}/>


        </Grid.Column>
        <Grid.Column width={7}>
          <Header size='huge' color="blue" style={{textTransform: "uppercase"}}>
            Pine Street Dental
            <Header.Subheader>
            Services
            </Header.Subheader>
          </Header>
          <Divider/>
          <List link>
            {categories}
</List>


        </Grid.Column>

      </Grid>
    )
  }
}
