import Reflux from 'reflux';
import mockData from './service-summary.mock.json';

const Actions = Reflux.createActions({
	getSummary: {
		children: ['completed', 'failed'],
		asyncResult: true
	}
});

Actions.getSummary.listen(function () {
	console.log('Loading data...', this);
	// this.completed(mockData);
	this.completed(mockData);
});

export default Actions;
