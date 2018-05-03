import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { AgitatedPage, DullPage, LazyPage, StuckPage, TemptedPage } from './AntidotesPages';
import bootstrapClasses, { ListGroup, ListGroupItem, } from '../../assets/bootstrap';
import * as routes from '../../constants/routes';
import withAuthorization from '../higherorder/withAuthorization';

class AntidotesPage extends React.Component {
	render() {
		return (
			<div>
				<Route exact path={this.props.match.url} component={() => <AntidotesMenuPage {...this.props}/>}/>
				<Route path={routes.ANTIDOTES_AGITATED} component={() => <AgitatedPage {...this.props}/>}/>
				<Route path={routes.ANTIDOTES_DULL} component={() => <DullPage {...this.props}/>}/>
				<Route path={routes.ANTIDOTES_LAZY} component={() => <LazyPage {...this.props}/>}/>
				<Route path={routes.ANTIDOTES_STUCK} component={() => <StuckPage {...this.props}/>}/>
				<Route path={routes.ANTIDOTES_TEMPTED} component={() => <TemptedPage {...this.props}/>}/>
			</div>
		);
	}
}

const AntidotesMenuPage = () => {
	const h3Style = { color: 'teal', margin: 0, marginBottom: 20, };
	return (
		<ContainerDiv>
			<h1 style={{ color: 'teal', margin: 0, marginBottom: 20, textAlign: 'center' }}>Antidotes</h1>
			<h5 style={{ textAlign: 'center' }}>
				Click on a hindrance to learn its counter. You may be affected by more than one hindrance. 
				With consistent effort, you will be able to overcome the obstacle(s).
			</h5>
			<br />
			<SimpleDiv>
				<h3 style={h3Style}>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_AGITATED}>Agitation</Link>
				</h3>
				<h5>Symptoms</h5>
				<ListGroup style={{margin: 0}}>
					<ListGroupItem>You blame yourself for having been distracted during meditation.</ListGroupItem>
					<ListGroupItem>You can't wait for meditation to end during the session.</ListGroupItem>
				</ListGroup>
			</SimpleDiv>
			<br />
			<SimpleDiv>
				<h3 style={h3Style}>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_DULL}>Dullness</Link>
				</h3>
				<h5>Symptoms</h5>
				<ListGroup style={{margin: 0}}>
					<ListGroupItem>You keep almost falling asleep during meditation.</ListGroupItem>
					<ListGroupItem>Your mind feels very foggy and not alert.</ListGroupItem>
				</ListGroup>
			</SimpleDiv>
			<br />
			<SimpleDiv>
				<h3 style={h3Style}>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_LAZY}>Laziness</Link>
				</h3>
				<h5>Symptoms</h5>
				<ListGroup style={{margin: 0}}>
					<ListGroupItem>When it's time for meditate, you don't feel like sitting down.</ListGroupItem>
					<ListGroupItem>You consciously want to think about other things instead of focusing during meditaiton.</ListGroupItem>
				</ListGroup>
			</SimpleDiv>
			<br />
			<SimpleDiv>
				<h3 style={h3Style}>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_STUCK}>Stuck</Link>
				</h3>
				<h5>Symptoms</h5>
				<ListGroup style={{margin: 0}}>
					<ListGroupItem>Despite diligent practise, you feel like you are getting nowhere or even regressing.</ListGroupItem>
				</ListGroup>
			</SimpleDiv>
			<br />
			<SimpleDiv>
				<h3 style={h3Style}>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_TEMPTED}>Temptation</Link>
				</h3>
				<h5>Symptoms</h5>
				<ListGroup style={{margin: 0}}>
					<ListGroupItem>Your mind keeps obsessing about attractive things despite your intention to focus.</ListGroupItem>
					<ListGroupItem>Your mind keeps obsessing about analyzing things despite your intention to focus.</ListGroupItem>
					<ListGroupItem>Your mind keeps obsessing about things you don't like despite your intention to focus.</ListGroupItem>
				</ListGroup>
			</SimpleDiv>
		</ContainerDiv>
	);

}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AntidotesPage);