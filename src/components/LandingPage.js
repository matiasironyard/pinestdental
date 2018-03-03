import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility,
	Label,
	Table
} from 'semantic-ui-react';
import Local from '../components/Local.js';
import Staff from '../components/Staff.js';
import DoctorImg from '../images/pinestdentaloffice-1.jpg'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
	<Container text className="heading-text">
		<Header
			inverted
			style={{
				fontSize: mobile ? '2em' : '4em',
				fontWeight: 'normal',
				marginBottom: 0,
				textTransform: 'uppercase',
				padding: '30px 0'
			}}
			as="h1">
			Pine Street Dental
		</Header>
		{/*}<Header
      as='h2'
      content='  Providing general dentistry to the family and friends of Spartanburg and the Upstate for over 40 years'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
      }}
    />*/}
	</Container>
);

HomepageHeading.propTypes = {
	mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { children } = this.props;
		const { fixed } = this.state;

		return (
			<Responsive {...Responsive.onlyComputer}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}>
					<Segment
						inverted
						textAlign="center"
						style={{ maxHeight: 950, padding: '1em 0em' }}
						className="staff-background">
						<Menu
							fixed={fixed ? 'top' : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size="large"
							className="top-nav">
							<Container>
								<Menu.Item as="a" active>
									Home
								</Menu.Item>
								<Menu.Item as="a">Work</Menu.Item>
								<Menu.Item as="a">Company</Menu.Item>
								<Menu.Item as="a">Careers</Menu.Item>
								<Menu.Item position="right">
									<Button as="a" inverted={!fixed}>
										Contact us
									</Button>
									<Button
										as="a"
										inverted={!fixed}
										primary={fixed}
										style={{ marginLeft: '0.5em' }}>
										Call Us
									</Button>
								</Menu.Item>
							</Container>
						</Menu>
						<HomepageHeading />
					</Segment>
				</Visibility>

				{children}
			</Responsive>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node
};

class MobileContainer extends Component {
	state = {};

	handleToggle = () =>
		this.setState({ sidebarOpened: !this.state.sidebarOpened });

	render() {
		const { children } = this.props;
		const { sidebarOpened } = this.state;

		return (
			<Responsive {...Responsive.onlyMobile}>
				<Sidebar.Pushable>
					<Sidebar
						as={Menu}
						animation="uncover"
						inverted
						vertical
						visible={sidebarOpened}>
						<Menu.Item as="a" active>
							Homes
						</Menu.Item>
						<Menu.Item as="a">Work</Menu.Item>
						<Menu.Item as="a">Company</Menu.Item>
						<Menu.Item as="a">Careers</Menu.Item>
						<Menu.Item as="a">Contact Us</Menu.Item>
						<Menu.Item as="a" primary>
							Call Us
						</Menu.Item>
					</Sidebar>

					<Sidebar.Pusher
						dimmed={sidebarOpened}
						onClick={this.handleToggle}
						style={{ minHeight: '100vh' }}>
						<Segment
							inverted
							textAlign="center"
							style={{ minHeight: 550, padding: '1em 0em' }}
							vertical
							className="staff-background">
							<Container>
								<Menu
									inverted
									pointing
									secondary
									size="large"
									className="top-nav">
									<Menu.Item onClick={this.handleToggle}>
										<Icon name="sidebar" />
									</Menu.Item>
									<Menu.Item position="right">
										<Button as="a" inverted>
											Contact Us
										</Button>
										<Button as="a" inverted style={{ marginLeft: '0.5em' }}>
											Call Us
										</Button>
									</Menu.Item>
								</Menu>
							</Container>
							<HomepageHeading mobile />
						</Segment>

						{children}
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Responsive>
		);
	}
}

MobileContainer.propTypes = {
	children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
	</div>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node
};

const LandingPage = () => (
	<ResponsiveContainer>
		<Segment style={{ padding: '4em 0em' }} vertical vertical>
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
					<Grid.Column width={8}>
						<Header
							as="h3"
							style={{
								fontSize: '2em',
								textTransform: 'uppercase',
								color: '#2185d0'
							}}>
							Pine Street Dental
						</Header>
						<p style={{ fontSize: '1.33em' }}>
							Providing general dentistry to the family and friends of
							Spartanburg and the Upstate for over 40 years.
						</p>
						<Header
							as="h3"
							style={{
								fontSize: '2em',
								textTransform: 'uppercase',
								color: '#2185d0'
							}}>
							Dr. Omar Figueroa-Valle
						</Header>
						<p style={{ fontSize: '1.33em' }}>
							Yes thats right, you thought it was the stuff of dreams, but even
							bananas can be bioengineered.
						</p>
					</Grid.Column>
					<Grid.Column floated="right" width={6}>
						<Image
							bordered
							rounded
							fluid
							style={{ objectFit: 'cover' }}
							src={DoctorImg}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment style={{ padding: '4em 0' }} vertical>
			<Grid celled="internally" columns="equal" stackable centered>
				<Grid.Row textAlign="center">
					<Grid.Column centered width={12}>
						<Staff />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment style={{ padding: '0em' }} vertical>
			<Grid celled="internally" columns="equal" stackable>
				<Grid.Row textAlign="center">
					<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
						<Header as="h3" style={{ fontSize: '2em' }}>
							"What a Company"
						</Header>
						<p style={{ fontSize: '1.33em' }}>
							That is what they all say about us
						</p>
					</Grid.Column>
					<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
						<Header as="h3" style={{ fontSize: '2em' }}>
							"I shouldn't have gone with their competitor."
						</Header>
						<p style={{ fontSize: '1.33em' }}>
							<Image avatar src="/assets/images/avatar/large/nan.jpg" />
							<b>Nan</b> Chief Fun Officer Acme Toys
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
		<Segment style={{ padding: '8em 0em' }} vertical>
			<Container text>
				<Header
					as="h3"
					style={{
						fontSize: '2em',
						textTransform: 'uppercase',
						color: '#2185d0'
					}}>
					The Pine Street Dental Difference
				</Header>
				<p style={{ fontSize: '1.33em' }}>What makes us special</p>
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Service</Table.HeaderCell>
							<Table.HeaderCell>Description</Table.HeaderCell>
							<Table.HeaderCell>Pine Street Dental</Table.HeaderCell>
							<Table.HeaderCell>Other Offices</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>
								<Icon color="green" name="checkmark" size="large" />
							</Table.Cell>
							<Table.Cell>
								<Icon color="red" name="x" size="large" />
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>
								<Icon color="green" name="checkmark" size="large" />
							</Table.Cell>
							<Table.Cell>
								<Icon color="red" name="x" size="large" />
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>
								<Icon color="green" name="checkmark" size="large" />
							</Table.Cell>
							<Table.Cell>
								<Icon color="red" name="x" size="large" />
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				<Divider
					as="h4"
					className="header"
					horizontal
					style={{
						margin: '3em 0em',
						textTransform: 'uppercase',
						color: '#2185d0'
					}}>
					<a href="#">Services</a>
				</Divider>
				<Header
					as="h3"
					style={{
						fontSize: '2em',
						textTransform: 'uppercase',
						color: '#2185d0'
					}}>
					We Provide The Following Services
				</Header>
				<p style={{ fontSize: '1.33em' }}>
					A little something about your awesome services...
				</p>
				<Divider
					as="h4"
					className="header"
					horizontal
					style={{
						margin: '3em 0em',
						textTransform: 'uppercase',
						color: '#2185d0'
					}}>
					<a href="#">Did you know?</a>
				</Divider>
				<Header
					as="h3"
					style={{
						fontSize: '2em',
						textTransform: 'uppercase',
						color: '#2185d0'
					}}>
					What happens when you dont brush your teeth?
				</Header>
				<p style={{ fontSize: '1.33em' }}>The rot and fall off!</p>
			</Container>
		</Segment>
		<Container fluid className="local">
			<Grid centered>
				<Grid.Row>
					<Grid.Column width={12}>
						<Local />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
		<Segment inverted vertical style={{ padding: '5em 0em' }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="About" />
							<List link inverted>
								<List.Item as="a">Sitemap</List.Item>
								<List.Item as="a">Contact Us</List.Item>
								<List.Item as="a">Religious Ceremonies</List.Item>
								<List.Item as="a">Gazebo Plans</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Services" />
							<List link inverted>
								<List.Item as="a">Banana Pre-Order</List.Item>
								<List.Item as="a">DNA FAQ</List.Item>
								<List.Item as="a">How To Access</List.Item>
								<List.Item as="a">Favorite X-Men</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={7}>
							<Header as="h4" inverted>
								Footer Header
							</Header>
							<p>
								Extra space for a call to action inside the footer that could
								help re-engage users.
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	</ResponsiveContainer>
);
export default LandingPage;
