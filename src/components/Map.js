import React, { Component } from "react";
import { Header, Icon, Grid, Image, Divider } from "semantic-ui-react";

export default class Map extends Component {
  render() {
    return (
      <Grid centered stackable columns={2}>
        <Grid.Row>
          <Grid.Column width={16}>
            <Divider
              as="h2"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}>
              <a href="#">Find Us</a>
            </Divider>
            <a
              href={this.props.data.url}
              target="_blank"
              rel="noopener noreferrer">
              <Header as="h2" textAlign="center">
                <Header.Subheader>
                  {this.props.data.formatted_address}
                </Header.Subheader>
              </Header>
            </a>
          </Grid.Column>
          <Grid.Column width={16}>
            <Divider
              as="h3"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}>
              <a href="#">Map</a>
            </Divider>
            <a
              href={this.props.data.url}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                fluid
                src="https://maps.googleapis.com/maps/api/staticmap?center=spartanburg,+sc&zoom=13&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cspartanburg,+sc"
                alt="Google Map of spartanburg, sc"
              />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
