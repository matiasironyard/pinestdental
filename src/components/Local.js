import React, { Component } from 'react';
import Map from '../components/Map.js';
import {
	List,
	Header,
	Icon,
	Grid,
	Segment,
	Container,
	Divider,
	Loader
} from 'semantic-ui-react';

export default class Local extends Component {
	render() {
		console.log('props', this.props)
		let loader = <Loader active inline='centered' />
		let phoneNumber = loader;
		let address = loader;
		let hours = loader;
		let mapUrl = loader;
		let data = loader;

		if(this.props.data){
			phoneNumber = this.props.data.result.formatted_phone_number;
			address = this.props.data.result.formatted_address;
			hours = this.props.data.result.opening_hours.weekday_text;
			data = this.props.data.result;
		}
		return (
			<Grid stackable columns={2}  className="space">
				<Grid.Column width={10}>
					<Segment>
						<Map data={data}/>
					</Segment>
				</Grid.Column>
				<Grid.Column width={6}>
					<Segment>
						<Container textAlign="center">
							<Divider
								as="h2"
								className="header"
								horizontal
								style={{ margin: '1em 0em', textTransform: 'uppercase' }}>
								<a href="#">Call Us</a>
							</Divider>
							<Header as="h3" icon>
								<Icon name="phone" color="blue" />
								Phone Number
								<Header.Subheader style={{padding: "15px 0"}}>
									<a href="tel:-864-582-5000" style={{fontSize: "2rem"}}>{phoneNumber}</a>
								</Header.Subheader>
							</Header>
						</Container>

						<Container>
							<Divider
								as="h2"
								className="header"
								horizontal
								style={{ margin: '1em 0em', textTransform: 'uppercase' }}>
								<a href="#">Office Hours</a>
							</Divider>

							<List
								divided={true}
								relaxed={true}
								style={{ textAlign: 'center', fontSize: '1.2rem' }}>
								<List.Item>
									<List.Content>
										<List.Header as="a">Monday</List.Header>
										<List.Description as="a">
											8:30 a.m - 1 p.m / 2 p.m - 5 p.m
										</List.Description>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>
										<List.Header as="a">Tuesday</List.Header>
										<List.Description as="a">
											8:30 a.m - 1 p.m / 2 p.m - 5 p.m
										</List.Description>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>
										<List.Header as="a">Wednesday</List.Header>
										<List.Description as="a">
											8:30 a.m - 1 p.m / 2 p.m - 5 p.m
										</List.Description>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>
										<List.Header as="a">Thursday</List.Header>
										<List.Description as="a">
											8:30 a.m - 1 p.m / 2 p.m - 4 p.m
										</List.Description>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>
										<List.Header as="a">Friday-Sunday</List.Header>
										<List.Description as="a">Closed</List.Description>
									</List.Content>
								</List.Item>
							</List>
						</Container>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}
