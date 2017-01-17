import Reflux from 'reflux';
import Actions from './service-summary.action';

class SummaryStore extends Reflux.Store {
	constructor()	{
		super();
		this.listenables = Actions;
	}
	onGetSummaryCompleted(data)	{
		console.log('Data loaded: ', data);
		this.setState({
			summary: data,
			loaded: true
		});
	}

	static onGetSummaryFailed(message)	{
		console.error('Could not load summary data: ', message);
	}
}

export default SummaryStore;
