import React, {Component} from 'react';
import PineStBldg from '../images/pinestdentaloffice-6.jpg';
import { Grid, Header, Divider, Loader, Dimmer} from 'semantic-ui-react';



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
    let blogPost;
    if(blogData !== null){
      blogData.map((post)=>{
        blogPost = (
          <div>
          {post.items[0].title}
          </div>
        )
      } else {loader}
    }
    return (
      <div>
      {blogPost}
      </div>
        )

  }
}
