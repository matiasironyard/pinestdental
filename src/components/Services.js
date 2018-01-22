import React, {Component} from 'react';
import ServiceCategories from '../data/servicescatergories.js'
import img from '../images/pinestdentaloffice-1.jpg';
import {  Image, Grid, Header, Divider, List} from 'semantic-ui-react';

console.log(ServiceCategories())

export default class Services extends Component {
  render() {
    let categories = ServiceCategories().map((items) => {
      let key = Math.random();
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
      <Grid stackable columns={2} style={{padding: "50px 0 0 0"}}>

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
