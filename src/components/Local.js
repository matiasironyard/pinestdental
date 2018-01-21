import React, {Component} from 'react';
import Map from '../components/Map.js'
import {List, Header, Icon} from 'semantic-ui-react'

export default class Local extends Component {
  render() {
    return (<section className="row no-gutters justify-content-center space local">
      <Map/>
      <div className="col-md-5 contact-pane">
        <Header as='h3' icon >
            <Icon name='phone' color="blue"/>
            Phone Number
            <Header.Subheader>
              <a href="tel:-864-582-5000">(864) 582-5000</a>
</Header.Subheader>

          </Header>

        <hr/>
        <div className="col">
          <Header as='h3' icon >
              <Icon name='calendar'  color="blue"/>
              Husinesses Hours

            </Header>
          <List divided={true} relaxed={true}>
            <List.Item>

              <List.Content>
                <List.Header as='a'>Monday</List.Header>
                <List.Description as='a'>8:30 a.m - 1 p.m / 2 p.m - 5 p.m</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>

              <List.Content>
                <List.Header as='a'>Tuesday</List.Header>
                <List.Description as='a'>8:30 a.m - 1 p.m / 2 p.m - 5 p.m</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>

              <List.Content>
                <List.Header as='a'>Wednesday</List.Header>
                <List.Description as='a'>8:30 a.m - 1 p.m / 2 p.m - 5 p.m</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>

              <List.Content>
                <List.Header as='a'>Thursday</List.Header>
                <List.Description as='a'>8:30 a.m - 1 p.m / 2 p.m - 4 p.m</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>

              <List.Content>
                <List.Header as='a'>Friday-Sunday</List.Header>
                <List.Description as='a'>Closed</List.Description>
              </List.Content>
            </List.Item>
          </List>

        </div>
      </div>

    </section>)
  }
}
