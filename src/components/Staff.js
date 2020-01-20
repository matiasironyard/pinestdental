import React, { Component } from "react";
import StaffData from "../data/staff.js";
import { Card, Grid, Header, Image, Accordion, Icon } from "semantic-ui-react";

export default class Staff extends Component {
  state = { activeIndex: null };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;

    let staff = StaffData().map((item, index) => {
      return (
        <div key={index}>
          <Image
            src={item.img}
            size="small"
            circular
            style={{
              margin: "0px auto",
              width: "200px",
              borderRadius: "100%",
              height: "200px",
              objectFit: "cover"
            }}
          />
          <Card
            raised={true}
            key={item.key}
            style={{
              width: "300px",
              border: "0 !important",
              boxShadow: "none",
              textAlign: "center",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Meta>
                <span className="date">{item.position}</span>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === index}
                    index={index}
                    onClick={this.handleClick}
                  >
                    <span className="date">Learn More</span>
                    <Icon name="dropdown" />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === index}>
                    <p>{item.bio}</p>
                  </Accordion.Content>
                </Accordion>
              </Card.Meta>
              <Card.Description></Card.Description>
            </Card.Content>
          </Card>
        </div>
      );
    });
    return (
      <Grid centered style={{ padding: "60px 0" }}>
        <Grid.Column>
          <Header
            as="h1"
            color="blue"
            style={{
              textTransform: "uppercase",
              paddingBottom: "60px",
              textAlign: "center"
            }}
          >
            Meet Our friendly Staff
          </Header>
          <Card.Group
            style={{ display: "flex", justifyContent: "center" }}
            itemsPerRow={2}
          >
            {staff}
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}
