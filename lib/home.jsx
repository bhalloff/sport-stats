import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import ScoreBoard from './scoreboard';

import ServiceSummaryStore from './service-summary.store';
import ServiceSummaryAction from './service-summary.action';

class Home extends Reflux.Component {
	constructor(props) {
		super(props);
		ServiceSummaryAction.getSummary();
		this.store = ServiceSummaryStore;
	}

	normalizeBoardData(summaryData) {
		const teamHome = _.get('summaryData', 'context.teams.team1', { name: 'Home', score: '' });
		const teamVisitor = _.get('summaryData', 'context.teams.team2', { name: 'Visitor', score: '' });
		const { name: homeName, score: homeScore } = teamHome;
		const { name: visitorName, score: visitorScore } = teamVisitor;
		return {
			home: {
				name: homeName,
				score: homeScore
			},
			visitor: {
				name: visitorName,
				score: visitorScore
			}
		};
	}

	render() {
		console.log(this.state)
		const boardData = this.normalizeBoardData(this.state.summary);

		return (
			<div>
				<h1 className="logo">
					Logo
				</h1>
				<ScoreBoard home={boardData.home} visitor={boardData.visitor}	/>
			</div>
		);
	}
}

export default Home;
