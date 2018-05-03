import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
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
	return (
		<ContainerDiv>
			<h3 style={{ color: 'teal', margin: 0, marginBottom: 20, textAlign: 'center' }}>Antidotes</h3>
			<h5>What is the problem you are currently facing?</h5>
			<br />
			<SimpleDiv>
				<h5>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_AGITATED}>Agitation</Link>
				</h5>
				<p>
					You feel agitated.
				</p>
			</SimpleDiv>
			<br />
			<SimpleDiv>
				<h5>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_DULL}>Dullness</Link>
				</h5>
				<p>
					You feel dull.
				</p>
			</SimpleDiv>
			<br />
			<SimpleDiv>
				<h5>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_LAZY}>Laziness</Link>
				</h5>
				<p>
					You feel lazy.
				</p>
			</SimpleDiv>
			<br />
			<SimpleDiv>
				<h5>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_STUCK}>Stuck</Link>
				</h5>
				<p>
					You feel stuck.
				</p>
			</SimpleDiv>
			<br />
			<SimpleDiv>
				<h5>
					<Link style={{color: 'teal'}} to={routes.ANTIDOTES_TEMPTED}>Tempted</Link>
				</h5>
				<p>
					You feel tempted.
				</p>
			</SimpleDiv>
		</ContainerDiv>
	);

}
const AgitatedPage = () => {
	return <div>Filler 2</div>
}
const DullPage = () => {
	return <div>Filler 3</div>
}
const LazyPage = () => {
	return <div>Filler 4</div>
}
const StuckPage = () => {
	return <div>Filler 5</div>
}
const TemptedPage = () => {
	return <div>Filler 6</div>
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AntidotesPage);