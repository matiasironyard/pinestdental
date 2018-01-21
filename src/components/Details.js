import React, {Component} from 'react';
import StaffData from '../data/staff.js';
import Doctor from '../components/Doctor.js';
import Office from '../components/Office.js';
import Staff from '../components/Staff.js';
import Services from '../components/Services.js'

import {
  Card,
  Icon,
  Image,
  Grid,
  Segment,
  Divider
} from 'semantic-ui-react';

export default class Details extends Component {
  render() {
    return (<Grid style={{
        padding: "30px 0 30px 0"
      }}>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}>
        <Office/>
          <Divider style={{marginBottom: "50px", marginTop: "50px"}}/>

        <Doctor/>
          <Divider style={{marginBottom: "50px", marginTop: "50px"}}/>

        <Staff/>
          <Divider style={{marginBottom: "50px", marginTop: "50px"}}/>
        <Services/>
      </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid>)
  }
}
