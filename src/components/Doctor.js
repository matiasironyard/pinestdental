import React, {Component} from 'react';
import DoctorData from '../data/doctor.js';
import DoctorImg from '../images/doctorfigueroa-1.jpg';
import ReactMarkdown from 'react-markdown';
import { Image, Grid, Container, Header, Divider} from 'semantic-ui-react';


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


      <Grid stackable columns={2} style={{backgroundColor: "#e9ecef", borderRadius: ".28571429rem", boxShadow: "0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)", margin: "50px 0 0 0"}}>
        <Grid.Column width={9} style={{padding: "30px 50px"}}>
          <Container>
            <Header size='huge' color="blue" style={{textTransform: "uppercase"}}>
              Dr. Figueroa-Valle
              <Header.Subheader>
              About
              </Header.Subheader>
            </Header>

          <Divider/>
          <div style={{fontSize: "120%", color: "rgba(0,0,0,.6)"}}>
            <ReactMarkdown source={bio}/>
          </div>

          </Container>

        </Grid.Column>
        <Grid.Column width={7} style={{padding: "0"}}>
          <Image size="large" src={DoctorImg}/>
        </Grid.Column>

      </Grid>



    )
  }
}
