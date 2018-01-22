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
        paddingBottom: "30px"
      }}>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}>
        <Office/>

        <Doctor/>

        <Staff/>
        <Services/>
      </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid>)
  }
}
