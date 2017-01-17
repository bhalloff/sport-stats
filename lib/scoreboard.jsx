import React from 'react';

const scoreShape = React.PropTypes.shape({
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.string.isRequired
}).isRequired;

function ScoreBoard(props) {
	const { home, visitor } = props;
	return (
		<div>
			<dl>
				<dt>
					{home.name}
				</dt>
				<dd>
					{home.score}
				</dd>
				<dt>
					{visitor.name}
				</dt>
				<dd>
					{visitor.score}
				</dd>
			</dl>
		</div>
	);
}
ScoreBoard.propTypes = {
	home: scoreShape,
	visitor: scoreShape
};

export default ScoreBoard;
