import React, {Component} from 'react';
import DoctorData from '../data/doctor.js';
import DoctorImg from '../images/doctorfigueroa-1.jpg';
import ReactMarkdown from 'react-markdown';
import { Card, Icon, Image, Grid, Segment, Container, Header, Divider} from 'semantic-ui-react';


export default class Doctor extends Component {
  constructor(props){
    super(props)
    this.state = {data: ""}

  }
  componentDidMount(){
    this.setState({data: DoctorData()[0]})
  }
  render() {
    let {data} = this.state;
    console.log('im', data)
    let bio;
    if(!data){
      bio = ''
    } else {
      bio = data.bio;
    }
    return (


      <Grid stackable columns={2}>
        <Grid.Column width={9}>
          <Container>
            <Header size='huge' color="blue">
              Dr. Figueroa-Valle
              <Header.Subheader>
              About
              </Header.Subheader>
            </Header>

          <Divider/>
          <ReactMarkdown source={bio}/>
          </Container>

        </Grid.Column>
        <Grid.Column width={7}>
          <Image size="large" src={DoctorImg}/>
        </Grid.Column>

      </Grid>



    )
  }
}
