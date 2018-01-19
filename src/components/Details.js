import React, {Component} from 'react';
import StaffData from '../data/staff.js';
import Doctor from '../components/Doctor.js';
import Office from '../components/Office.js';
import Staff from '../components/Staff.js'


import {Card, Icon, Image, Grid, Segment} from 'semantic-ui-react';

export default class Details extends Component {
  render() {
    return (<Grid>
      <Grid.Column width={2}>
        empty
      </Grid.Column>
      <Grid.Column width={12}>
        <Office/>
        <Doctor/>
        <Staff/>
      </Grid.Column>
      <Grid.Column width={2}>
        empty
      </Grid.Column>
    </Grid>)
  }
}
