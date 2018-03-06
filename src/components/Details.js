import React, {Component} from 'react';
import Doctor from '../components/Doctor.js';
import Office from '../components/Office.js';
import Staff from '../components/Staff.js';
import Services from '../components/Services.js'

import {
  Grid
} from 'semantic-ui-react';

export default class Details extends Component {
  render() {
    return (<Grid style={{
        paddingBottom: "30px"
      }}>
      <Grid.Column width={16}>

        <Doctor/>
</Grid.Column>

<Grid.Column centered width={12}>

        <Staff/>
        <Services/>
      </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
    </Grid>)
  }
}
