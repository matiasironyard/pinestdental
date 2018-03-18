import React, {Component} from 'react';
import { Grid, Header, Divider, Loader, Dimmer, Segment, Button, Label} from 'semantic-ui-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import moment from 'moment'



export default class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogData: null
    }
  }
  componentDidMount(){
    let self = this;
    let blogUrl = "https://yelp-proxy-server.herokuapp.com/pinestreetdentalblog";
    fetch(blogUrl)
      .then(function(response) {
        if (response.status >= 400) {
          console.log("error", response);
        }
        console.log('res', response)
        return response.json();
      })
      .then(function(data) {
        console.log('blog data', data)
        self.setState({blogData: data})

      });
  }
  render() {
    let loader = (
      <Dimmer active inverted>
  <Loader size='large'>Loading</Loader>
</Dimmer>
    )
    let {blogData} = this.state;
    console.log('BLOG DATA', this.state.blogData)
    let blogPostContent;
    let blogPostTitle;
    let blogId;
    let blogLink;
    let postedOn;
    if(blogData !== null){
      blogPostContent = blogData.items[0].content;
      blogPostTitle = blogData.items[0].title;
      blogId = blogData.items[0].blog.id;
      blogLink =`https://www.blogger.com/blogger.g?blogID=${blogId}`
      postedOn = moment().startOf(blogData.items["0"].published).fromNow();
    }

    return (

      <Segment>
      <Header as="h3" style={{
        fontSize: "1.5em",
        textTransform: "uppercase",
        color: "#2185d0",
      }}>
      {blogPostTitle}
      <Header.Subheader>
      {postedOn}
      </Header.Subheader>
      </Header>
      <Divider/>
      <div style={{padding: "20px 15px", height:"600px", overflow: "auto"}}>
      { ReactHtmlParser(blogPostContent) }
      </div>
      <Divider/>
      <a href={blogLink} target="_blank">
      <Button basic color="blue" fluid>Read Recent Posts</Button>
      </a>
      </Segment>
        )

  }
}
