import React, { Component } from "react";
import { Header, Grid, Image, Divider } from "semantic-ui-react";
import picture from "../images/officeExterior.jpg";

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
              style={{ margin: "2em 0em", textTransform: "uppercase" }}
            >
              <a>Find Us</a>
            </Divider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10}>
            <Image src={picture} />
          </Grid.Column>
          <Grid.Column width={6}>
            <a
              href={this.props.data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header as="h3" textAlign="left">
                ADDRESS
              </Header>
              <p>364 S. Pine Street, Suite A-101</p>
              <p>Spartanburg, SC 29302</p>
            </a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} style={{ marginTop: "30px" }}>
            <iframe
              title="pinest-dental-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.4126124107916!2d-81.9174088847612!3d34.94626568037214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d2892b185b97ef5!2sPine+Street+Dental!5e0!3m2!1sen!2sus!4v1521335983219"
              frameBorder="0"
              style={{ width: "100%", height: "550px", border: "0" }}
              allowFullScreen
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
