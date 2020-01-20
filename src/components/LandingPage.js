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
	Item
} from 'semantic-ui-react';
import Blog from '../components/Blog.js';
import Local from '../components/Local.js';
import Staff from '../components/Staff.js';
import OfficeDoor from '../images/pinestdentaloffice-6.jpg';

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
				padding: '30px 0',
				display: 'flex',
				justifyContent: 'center'
			}}
			as="h1"
		>
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
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign="center"
						style={{ maxHeight: 950, padding: '1em 0em' }}
						className="staff-background"
					>
						<Menu
							fixed={fixed ? 'top' : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size="large"
							className="top-nav"
						>
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
								<Menu.Item as="a" href="#social">
									Social
								</Menu.Item>
								<Menu.Item as="a">Se Habla Español</Menu.Item>
								<Menu.Item position="right">
									<Button as="a" inverted={!fixed} href="#find-us">
										Find Us
									</Button>
									<Button
										as="a"
										inverted={!fixed}
										primary={fixed}
										href="tel:-864-582-5000"
										style={{ marginLeft: '0.5em' }}
									>
										582-5000
									</Button>
									<Button
										as="a"
										href="https://www.facebook.com/pinestdentalsc/"
										target="_blank"
										inverted={!fixed}
										primary={fixed}
										style={{ marginLeft: '0.5em' }}
									>
										Facebook
									</Button>
									<Button
										as="a"
										href="https://drive.google.com/drive/folders/1eG2DDF_sEuRfNO4vIPYP1Rt8vad8-K00?usp=sharing"
										target="_blank"
										inverted={!fixed}
										primary={fixed}
										style={{ marginLeft: '0.5em' }}
									>
										Forms
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
						style={{ padding: '15px 0 0 15px' }}
						as={Menu}
						animation="uncover"
						inverted
						vertical
						visible={sidebarOpened}
					>
						<Menu.Item as="a" href="#staff" onClick={this.handleToggle}>
							Staff
						</Menu.Item>
						<Menu.Item as="a" href="#services" onClick={this.handleToggle}>
							Services
						</Menu.Item>
						<Menu.Item as="a" href="#social" onClick={this.handleToggle}>
							Social
						</Menu.Item>
						<Menu.Item
							onClick={this.handleToggle}
							as="a"
							href="https://www.facebook.com/pinestdentalsc/"
							target="_blank"
						>
							Facebook
						</Menu.Item>
						<Menu.Item
							onClick={this.handleToggle}
							as="a"
							href="https://www.instagram.com/pinestdentalsc/"
							target="_blank"
						>
							Instagram
						</Menu.Item>
						<Menu.Item
							as="a"
							href="#find-us"
							primary
							onClick={this.handleToggle}
						>
							Contact & Find Us
						</Menu.Item>
						<Menu.Item
							as="a"
							href="https://drive.google.com/drive/folders/1eG2DDF_sEuRfNO4vIPYP1Rt8vad8-K00?usp=sharing"
							target="_blank"
							primary
							onClick={this.handleToggle}
						>
							Patient Forms
						</Menu.Item>
						<Menu.Item
							as="a"
							href="https://www.cigna.com/"
							target="_blank"
							primary
							onClick={this.handleToggle}
						>
							Cigna
						</Menu.Item>
						<Menu.Item
							as="a"
							href="https://www.deltadentalins.com/"
							target="_blank"
							primary
							onClick={this.handleToggle}
						>
							Delta Dental Premier
						</Menu.Item>
						<Menu.Item as="a">Se Habla Español</Menu.Item>
						<Menu.Item as="a" primary onClick={this.handleToggle}>
							Close
						</Menu.Item>
					</Sidebar>

					<Sidebar.Pusher dimmed={sidebarOpened} style={{ minHeight: '100vh' }}>
						<Segment
							inverted
							textAlign="center"
							style={{ minHeight: 550, padding: '1em 0em' }}
							vertical
							className="staff-background"
						>
							<Container>
								<Menu
									inverted
									pointing
									secondary
									size="large"
									className="top-nav"
								>
									<Menu.Item onClick={this.handleToggle}>
										<Icon name="sidebar" />
									</Menu.Item>
									<Menu.Item position="right">
										<Button as="a" iverted href="#find-us">
											Find Us
										</Button>
										<Button
											as="a"
											href="tel:-864-582-5000"
											inverted
											style={{ marginLeft: '0.5em' }}
										>
											582-5000
										</Button>
									</Menu.Item>
								</Menu>
							</Container>
							<HomepageHeading mobile />
						</Segment>
						<section>{children}</section>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Responsive>
		);
	}
}

MobileContainer.propTypes = {
	children: PropTypes.node
};

class TabletContainer extends Component {
	state = {};

	handleToggle = () =>
		this.setState({ sidebarOpened: !this.state.sidebarOpened });

	render() {
		const { children } = this.props;
		const { sidebarOpened } = this.state;

		return (
			<Responsive {...Responsive.onlyTablet}>
				<Sidebar.Pushable>
					<Sidebar
						style={{ padding: '15px 0 0 15px' }}
						as={Menu}
						animation="uncover"
						inverted
						vertical
						visible={sidebarOpened}
					>
						<Menu.Item as="a" href="#staff" onClick={this.handleToggle}>
							Staff
						</Menu.Item>
						<Menu.Item as="a" href="#services" onClick={this.handleToggle}>
							Services
						</Menu.Item>
						<Menu.Item as="a" href="#social" onClick={this.handleToggle}>
							Social
						</Menu.Item>
						<Menu.Item
							onClick={this.handleToggle}
							as="a"
							href="https://www.facebook.com/pinestdentalsc/"
							target="_blank"
						>
							Facebook
						</Menu.Item>
						<Menu.Item
							onClick={this.handleToggle}
							as="a"
							href="https://www.instagram.com/pinestdentalsc/"
							target="_blank"
						>
							Instagram
						</Menu.Item>
						<Menu.Item
							as="a"
							href="#find-us"
							primary
							onClick={this.handleToggle}
						>
							Contact & Find Us
						</Menu.Item>
						<Menu.Item
							as="a"
							href="https://drive.google.com/drive/folders/1eG2DDF_sEuRfNO4vIPYP1Rt8vad8-K00?usp=sharing"
							target="_blank"
							primary
							onClick={this.handleToggle}
						>
							Patient Forms
						</Menu.Item>
						<Menu.Item
							as="a"
							href="https://www.cigna.com/"
							target="_blank"
							primary
							onClick={this.handleToggle}
						>
							Cigna
						</Menu.Item>
						<Menu.Item
							as="a"
							href="https://www.deltadentalins.com/"
							target="_blank"
							primary
							onClick={this.handleToggle}
						>
							Delta Dental Premier
						</Menu.Item>
						<Menu.Item as="a">Se Habla Español</Menu.Item>
						<Menu.Item as="a" primary onClick={this.handleToggle}>
							Close
						</Menu.Item>
					</Sidebar>

					<Sidebar.Pusher
						dimmed={sidebarOpened}
						onClick={this.handleToggle}
						style={{ minHeight: '100vh' }}
					>
						<Segment
							inverted
							textAlign="center"
							style={{ minHeight: 550, padding: '1em 0em' }}
							vertical
							className="staff-background"
						>
							<Container>
								<Menu
									inverted
									pointing
									secondary
									size="large"
									className="top-nav"
								>
									<Menu.Item onClick={this.handleToggle}>
										<Icon name="sidebar" />
									</Menu.Item>
									<Menu.Item position="right">
										<Button as="a" inverted>
											Contact Us
										</Button>
										<Button
											as="a"
											href="tel:-864-582-5000"
											inverted
											style={{ marginLeft: '0.5em' }}
										>
											582-5000
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

TabletContainer.propTypes = {
	children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
		<TabletContainer>{children}</TabletContainer>
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
		let url = 'https://yelp-proxy-server.herokuapp.com/pinestreetdentalsc';
		let self = this;

		fetch(url)
			.then(function(response) {
				if (response.status >= 400) {
					console.log('error', response);
				}
				return response.json();
			})
			.then(function(data) {
				self.setState({ data: data });
			});
	}

	render() {
		let { data } = this.state;
		let reviews = [];
		if (data != null) {
			data.result.reviews.map(item => {
				return reviews.push(item);
			});
		}

		return (
			<ResponsiveContainer>
				<Segment vertical>
					<Grid stackable verticalAlign="middle">
						<Grid.Row
							style={{
								backgroundImage:
									'url(http://www.ourupstatesc.info/myimages/hub-bub_banner.jpg)',
								height: '500px',
								backgroundSize: 'cover',
								padding: '0'
							}}
						>
							<Grid.Column
								mobile={11}
								tablet={10}
								computer={9}
								style={{
									background: 'rgba(255, 255, 255, 0.75)',
									height: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									padding: '100px 50px',
									textAlign: 'center'
								}}
							>
								<Header
									as="h2"
									style={{
										textTransform: 'uppercase',
										color: '#2185d0'
									}}
								>
									Pine Street Dental
								</Header>
								<p style={{ fontSize: '1.33em' }}>
									Providing general dentistry to the family and friends of
									Spartanburg and the Upstate for over 40 years.
								</p>
								<p style={{ fontSize: '1.2em' }}>
									Proporcionando odontología general a la familia y amigos de
									Spartanburg y el norte del estado por más de 40 años.
								</p>
							</Grid.Column>
							<Grid.Column floated="right" width={6}>
									<Image
										bordered
										rounded
										fluid
										style={{ objectFit: "cover" }}
										src={OfficeDoor}
									/>
								</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				<div
					style={{
						padding: '0em',
						backgroundColor: '#add8e6',
						boxShadow: 'rgba(34, 36, 38, 0.15) 0px 7px 10px'
					}}
				>
					<Grid celled="internally" columns="equal" stackable>
						<Grid.Row textAlign="center" centered>
							<Grid.Column
								width={8}
								style={{
									paddingBottom: '5em',
									paddingTop: '5em',
									display: 'flex',
									alignItems: 'center'
								}}
							>
								{reviews[0] ? (
									<Item.Group>
										<Item>
											<Header as="h2" content="TESTIMONIALS" />

										</Item>
										<Item
											style={{
												display: 'flex',
												alignItems: 'center',
												paddingLeft: '15px'
											}}
										>
											<Item.Image
												size="tiny"
												src={reviews[0].profile_photo_url}
											/>

											<Item.Content style={{ textAlign: 'center' }}>
												<Item.Description>{reviews[0].text}</Item.Description>
												<Item.Extra>{reviews[0].author_name}</Item.Extra>
											</Item.Content>
										</Item>
									</Item.Group>
								) : (
									''
								)}
							</Grid.Column>
							<Grid.Column
								width={8}
								style={{
									paddingBottom: '5em',
									paddingTop: '5em',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between'
								}}
							>
								{reviews[1] ? (
									<Item.Group>
										<Item style={{ display: 'flex', alignItems: 'center' }}>
											<Item.Image
												size="tiny"
												src={reviews[1].profile_photo_url}
											/>

											<Item.Content style={{ textAlign: 'center' }}>
												<Item.Description>{reviews[1].text}</Item.Description>
												<Item.Extra>{reviews[1].author_name}</Item.Extra>
											</Item.Content>
										</Item>
										<Divider />

										<Item style={{ display: 'flex', alignItems: 'center' }}>
											<Item.Image
												size="tiny"
												src={reviews[2].profile_photo_url}
											/>
											<Item.Content style={{ textAlign: 'center' }}>
												<Item.Description>{reviews[2].text}</Item.Description>
												<Item.Extra>{reviews[2].author_name}</Item.Extra>
											</Item.Content>
										</Item>
									</Item.Group>
								) : (
									''
								)}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
				<Segment style={{ padding: '2em 0em' }} vertical>
					<Container text>
						<Divider
							id="services"
							as="h1"
							className="header"
							horizontal
							style={{
								margin: '2em 0em',
								textTransform: 'uppercase',
								color: '#2185d0'
							}}
						>
							<a>Services</a>
						</Divider>

						<Grid divided inverted stackable>
							<Grid.Row>
								<Grid.Column width={8}>
									<List
										link
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											fontSize: '1.5rem'
										}}
									>
										<List.Item>Cleaning</List.Item>
										<List.Item>Exams</List.Item>
										<List.Item>Fillings</List.Item>
										<List.Item>Pediatric Dentistry</List.Item>
										<List.Item>Teeth Whitening</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={8}>
									<List
										link
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											fontSize: '1.5rem'
										}}
									>
										<List.Item>Crowns</List.Item>
										<List.Item>Implants</List.Item>
										<List.Item>Extractions</List.Item>
										<List.Item>Call for more services</List.Item>
										<List.Item>Se Habla Español</List.Item>
									</List>
								</Grid.Column>
								
							</Grid.Row>
						</Grid>
					</Container>
				</Segment>
				<Segment style={{ padding: '2em 0' }} vertical id="staff">
					<Grid celled="internally" columns="equal" stackable centered>
						<Grid.Row textAlign="center">
							<Grid.Column mobile={16} tablet={16} computer={16}>
								<Staff />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<Container fluid className="local" id="find-us">
					<Grid centered>
						<Grid.Row>
							<Grid.Column mobile={16} tablet={16} computer={15}>
								<Local data={data} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
				<Segment
					style={{ padding: '1em 0', background: '#e9ecef' }}
					vertical
					id="blog"
				>
					<Container>
						<Divider
							id="blog"
							as="h1"
							className="header"
							horizontal
							style={{
								margin: '3em 0em',
								textTransform: 'uppercase',
								color: '#2185d0'
							}}
						>
							<a href="social">Social Media</a>
						</Divider>
						<Grid stackable id="social">
							<Grid.Row>
								<Grid.Column width={8}>
									<Blog />
								</Grid.Column>
								<Grid.Column width={8}>
									<iframe
										title="pinest-denal-facebook"
										src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinestdentalsc%2F&tabs=timeline&width=500&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=527935110921167"
										style={{
											width: '100%',
											height: '800px',
											border: 'none',
											overflow: 'hidden'
										}}
										scrolling="no"
										frameborder="0"
										allowTransparency="true"
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</Segment>
				<Segment inverted vertical style={{ padding: '2em 0em' }}>
					<Container>
						<Grid divided inverted stackable>
							<Grid.Row>
								<Grid.Column width={4}>
									<Header inverted as="h4" content="Services" />
									<List link inverted>
										<List.Item>Cleaning</List.Item>
										<List.Item>Exams</List.Item>
										<List.Item>Fillings</List.Item>
										<List.Item>Crowns</List.Item>
										<List.Item>Implants</List.Item>
										<List.Item>Extractions</List.Item>
										<List.Item>Pediatric Dentistry</List.Item>
										<List.Item>Call for more services</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={4}>
									<Header as="h4" inverted>
										Patient Forms
									</Header>
									<List.Item
										as="a"
										href="https://drive.google.com/drive/folders/1eG2DDF_sEuRfNO4vIPYP1Rt8vad8-K00?usp=sharing"
										target="_blank"
									>
										See Forms
									</List.Item>

									<Header as="h4" inverted>
										Accepted Insurances
									</Header>
									<List link inverted>
										<List.Item
											as="a"
											href="https://www.cigna.com/"
											target="_blank"
										>
											Cigna
										</List.Item>
										<List.Item
											as="a"
											href="https://www.deltadentalins.com/"
											target="_blank"
										>
											Delta Dental Premier
										</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={4}>
									<Header as="h4" inverted>
										Contact & Patient Information
									</Header>
									<List link inverted>
										<List.Item as="a">(864) 582-5000</List.Item>
										<List.Item as="a">
											364 S. Pine Street, Suite A-101, Spartanburg, SC 29302
										</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={2}>
									<Header inverted as="h4" content="Social" />
									<List link inverted>
										<List.Item
											as="a"
											href="https://www.facebook.com/pinestdentalsc/"
											target="_blank"
										>
											Facebook
										</List.Item>
										<List.Item
											as="a"
											href="https://www.instagram.com/pinestdentalsc/"
											target="_blnak"
										>
											Instagram
										</List.Item>
									</List>
									<Header inverted as="h4" content="Website" />
									<List link inverted>
										<List.Item
											as="a"
											href="http://wwww.matiasmariani.io"
											target="_blank"
										>
											Matias Mariani
										</List.Item>
										<List.Item as="a">&reg; PineStDentalSC 2018</List.Item>
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
