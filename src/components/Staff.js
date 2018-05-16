import React, { Component } from 'react';
import StaffData from '../data/staff.js';
import { Card, Grid, Header, Image } from 'semantic-ui-react';

export default class Staff extends Component {
	render() {
		let staff = StaffData().map(item => {
			return (
				<div>
				<Image
					src={item.img}
					size='small' circular
					style={{
						"margin": "0px auto",
						"width": "200px",
						"borderRadius": "100%",
						"height": "200px",
						"objectFit": "cover"
					}}
				/>
				<Card raised={true} key={item.key} style={{
					"width": "300px",
				  "border": "0 !important",
				  "boxShadow": "none",
				  "textAlign": "center"
				}}>
					<Card.Content>
						<Card.Header>{item.name}</Card.Header>
						<Card.Meta>
							<span className="date">{item.position}</span>
						</Card.Meta>
						{/*<Card.Description>{item.bio}</Card.Description>*/}
					</Card.Content>
				</Card>
				</div>
			);
		});
		return (
			<Grid centered>
				<Grid.Column>
					<Header
						as="h2"
						color="blue"
						style={{
							textTransform: 'uppercase',
							paddingBottom: '40px',
							textAlign: 'center'
						}}>
						Meet Our friendly Staff
					</Header>
					<Card.Group
						style={{ display: 'flex', justifyContent: 'center' }}
						itemsPerRow={2}>
						{staff}
					</Card.Group>
				</Grid.Column>
			</Grid>
		);
	}
}
