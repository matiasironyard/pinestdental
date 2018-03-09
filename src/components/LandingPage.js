import PropTypes from "prop-types";
import React, { Component } from "react";
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
	Table,
	Item
} from "semantic-ui-react";
import Blog from "../components/Blog.js";
import Local from "../components/Local.js";
import Staff from "../components/Staff.js";
import DoctorImg from "../images/pinestdentaloffice-1.jpg";
import gapi from "gapi-client";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
	<Container text className="heading-text">
		<Header
			inverted
			style={{
				fontSize: mobile ? "2em" : "4em",
				fontWeight: "normal",
				marginBottom: 0,
				textTransform: "uppercase",
				padding: "30px 0"
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
						style={{ maxHeight: 950, padding: "1em 0em" }}
						className="staff-background">
						<Menu
							fixed={fixed ? "top" : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size="large"
							className="top-nav">
							<Container>
								<Menu.Item as="a" href="#" active>
									Home
								</Menu.Item>
								<Menu.Item as="a" href="#staff">
									Staff
								</Menu.Item>
								<Menu.Item as="a" href="#services">
									Services
								</Menu.Item>
								<Menu.Item as="a" href="#blog">
									Blog
								</Menu.Item>
								<Menu.Item position="right">
									<Button as="a" inverted={!fixed} href="#find-us">
										Find Us
									</Button>
									<Button
										as="a"
										href="#find-us"
										inverted={!fixed}
										primary={fixed}
										style={{ marginLeft: "0.5em" }}>
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
						<Menu.Item as="a" href="#" active>
							Home
						</Menu.Item>
						<Menu.Item as="a" href="#staff">
							Staff
						</Menu.Item>
						<Menu.Item as="a" href="#services">
							Services
						</Menu.Item>
						<Menu.Item as="a" href="#blog">
							Blog
						</Menu.Item>
						<Menu.Item as="a" href="#find-us" primary>
							Contact & Find Us
						</Menu.Item>
					</Sidebar>

					<Sidebar.Pusher
						dimmed={sidebarOpened}
						onClick={this.handleToggle}
						style={{ minHeight: "100vh" }}>
						<Segment
							inverted
							textAlign="center"
							style={{ minHeight: 550, padding: "1em 0em" }}
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
										<Button as="a" inverted style={{ marginLeft: "0.5em" }}>
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
export default class LandingPage extends Component {
	constructor(props) {
		super();
		this.state = {
			data: null,
			blog: null
		};
	}
	componentDidMount() {
		let url = "https://yelp-proxy-server.herokuapp.com/pinestreetdentalsc";
		let self = this;

		fetch(url)
			.then(function(response) {
				if (response.status >= 400) {
					console.log("error", response);
				}
				return response.json();
			})
			.then(function(data) {
				self.setState({ data: data });
			});
	}

	render() {
		let { data, blog } = this.state;
		let reviews = [];
		let blogPost = null;
		if (data != null) {
			data.result.reviews.map(item => {
				reviews.push(item);
			});
		}

		return (
			<ResponsiveContainer>
				<Segment style={{ padding: "4em 0em" }} vertical vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={8}>
								<Header
									as="h3"
									style={{
										fontSize: "2em",
										textTransform: "uppercase",
										color: "#2185d0"
									}}>
									Pine Street Dental
								</Header>
								<p style={{ fontSize: "1.33em" }}>
									Providing general dentistry to the family and friends of
									Spartanburg and the Upstate for over 40 years.
								</p>
							</Grid.Column>
							<Grid.Column floated="right" width={6}>
								<Image
									bordered
									rounded
									fluid
									style={{ objectFit: "cover" }}
									src={DoctorImg}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				<Segment style={{ padding: "4em 0" }} vertical id="staff">
					<Grid celled="internally" columns="equal" stackable centered>
						<Grid.Row textAlign="center">
							<Grid.Column width={12}>
								<Staff />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<Segment style={{ padding: "0em", backgroundColor: "#add8e6", boxShadow: "rgba(34, 36, 38, 0.15) 0px 7px 10px" }} vertical>
					<Grid celled="internally" columns="equal" stackable>
						<Grid.Row textAlign="center" centered>
							<Grid.Column
								width={4}
								style={{ paddingBottom: "5em", paddingTop: "5em" }}>
								{reviews[0] ? (
									<Item.Group>
										<Item>
											<Item.Image
												size="tiny"
												src={reviews[0].profile_photo_url}
											/>

											<Item.Content>
												<Item.Description>
													"{reviews[0].text} "
												</Item.Description>
												<Item.Extra>{reviews[0].author_name}</Item.Extra>
											</Item.Content>
										</Item>
									</Item.Group>
								) : (
									""
								)}
							</Grid.Column>
							<Grid.Column
								width={5}
								style={{ paddingBottom: "5em", paddingTop: "5em" }}>
								{reviews[1] ? (
									<Item.Group>
										<Item>
											<Item.Image
												size="tiny"
												src={reviews[1].profile_photo_url}
											/>

											<Item.Content>
												<Item.Description>
													"{reviews[1].text} "
												</Item.Description>
												<Item.Extra>{reviews[1].author_name}</Item.Extra>
											</Item.Content>
										</Item>
									</Item.Group>
								) : (
									""
								)}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<Segment style={{ padding: "8em 0em" }} vertical>
					<Container text>
						<Header
							as="h3"
							style={{
								fontSize: "2em",
								textTransform: "uppercase",
								color: "#2185d0"
							}}>
							The Pine Street Dental Difference
						</Header>
						<p style={{ fontSize: "1.33em" }}>What makes us special</p>
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
							id="services"
							as="h2"
							className="header"
							horizontal
							style={{
								margin: "3em 0em",
								textTransform: "uppercase",
								color: "#2185d0"
							}}>
							<a>Services</a>
						</Divider>
						<Header
							as="h3"
							style={{
								fontSize: "2em",
								textTransform: "uppercase",
								color: "#2185d0"
							}}>
							We Provide The Following Services
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							A little something about your awesome services...
						</p>
						<Divider
							id="blog"
							as="h2"
							className="header"
							horizontal
							style={{
								margin: "3em 0em",
								textTransform: "uppercase",
								color: "#2185d0"
							}}>
							<a href="#">Blog</a>
						</Divider>
						<Blog />
					</Container>
				</Segment>
				<Container fluid className="local" id="find-us">
					<Grid centered>
						<Grid.Row>
							<Grid.Column mobile={16} tablet={16} computer={12}>
								<Local data={data} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
				<Segment inverted vertical style={{ padding: "5em 0em" }}>
					<Container>
						<Grid divided inverted stackable>
							<Grid.Row>
								<Grid.Column width={3}>
									<Header inverted as="h4" content="Social" />
									<List link inverted>
										<List.Item as="a">Facebook</List.Item>
										<List.Item as="a" id="staff">Instagram</List.Item>
										<List.Item as="a">LinkedIn</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={3}>
									<Header inverted as="h4" content="Services" />
									<List link inverted>
										<List.Item as="a">Cleaning</List.Item>
										<List.Item as="a">Crowns</List.Item>
										<List.Item as="a">Fillings</List.Item>
										<List.Item as="a">Full Service</List.Item>
										<List.Item as="a">Call for more services</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={7}>
									<Header as="h4" inverted>
										Contact & Patient Information
									</Header>
									<List link inverted>
										<List.Item as="a">(864) 582-5000</List.Item>
										<List.Item as="a">364 S. Pine Street, Suite A-101, Spartanburg, SC 29302</List.Item>
										<List.Item as="a">Patient Form</List.Item>
									</List>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</Segment>
			</ResponsiveContainer>
		);
	}
}