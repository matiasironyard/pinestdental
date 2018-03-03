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
      <Grid.Column width={8} style={{padding: "0"}}>
        <Image fluid  src={DoctorImg} style={{objectFit: "cover", height: "800px"}}/>
      </Grid.Column>
        <Grid.Column width={8} >
          <Container>
          <Header size='huge' color="blue" style={{textTransform: "uppercase", padding: "50px"}}>Pine Street Dental
            <Divider/>
            <Header.Subheader style={{color: "rgba(0,0,0,.95)", lineHeight: "2"}}>
            Providing general dentistry to the family and friends of Spartanburg and the Upstate for over 40 years.
            </Header.Subheader>
          </Header>
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


      </Grid>



    )
  }
}
